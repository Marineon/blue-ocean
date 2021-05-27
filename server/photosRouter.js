import express from 'express';
import db from '../database'
const photosRouter = express.Router();

// get current users photos + all photos shared with them
photosRouter.get('/allPhotos', async (req, res) => {
  const { userId } = req.body;
  const findUserFriends = (id) => User.find({ 'userId': id }).select('friends');
  const findUserFriendPhotos = (friends) => UserPhotos.find({ 'ownerId': { $in: friends } });
  const findUserPhotos = (id) => UserPhotos.find({ 'ownerId': id });
  try {
    const userFriendsObj = await findUserFriends(2);
    const userFriends = userFriendsObj[0].friends.map(u => u.userId);
    const userFriendPhotos = await findUserFriendPhotos(userFriends);
    const selectedPhotos = userFriendPhotos.map(user => user.photos.filter(p => p.accessLevel === 2)).flat();
    const userPhotosObj = await findUserPhotos(userId);
    const userPhotos = userPhotosObj.map(p => p.photos).flat();
    userPhotos.forEach(p => selectedPhotos.push(p));

    res.status(200).send(selectedPhotos.sort((a, b) => {
      return a.uploadDate - b.uploadDate;
    })))
  } catch (error) {
  res.status(500).send(error);
}

})

// find one and update
photosRouter.patch('/single', (req, res) => {
  // what fields need to be updated?
  // tags, accessLevel
  // can they be updated all at once?

});
// find many and update man002y
photosRouter.patch('/multiple', (req, res) => {
  //update specified information on specified photo(s)


});

photosRouter.put('/', (req, res) => {
  //upload a new photo (is this the same process for many photos?)
  //this functionality is currently in images route, not sure how we want to handle upload.
  //maybe copy image upload over to here, but at somepoint we need to handle photo information and inserting that to db
  //^^^Brenton has the upload stuff figured out, so may need to coordinate with him briefly
})


export default photosRouter;