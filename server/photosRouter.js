import express from 'express';
import db from '../database'
const photosRouter = express.Router();

// get current users photos + all photos shared with them
photosRouter.get('/allPhotos', (req, res) => {
  const { userId } = req.body;
  const selectedPhotos = [];
  const userFriends = [];

  // get user's friends
  const findUserFriends = User.find({ 'userId': `${userId}` })
    .select('friends');
  findUserFriends.exec((err, friends) => {
    if (err) {
      console.log(err);
    } else {
      friends.forEach(f => {
        userFriends.push(f.friends);
        // console.log('userFriends', userFriends);
      });
    }
  });
  // add friends of user's photos if accessible
  const findFriendsPhotos = UserPhotos.find({ 'ownerId': { $in: userFriends } });
  findFriendsPhotos.exec((err, results) => {
    if (err) {
      console.log(err);
    } else {
      results.forEach(doc => {
        doc.photos = doc.photos.filter(photo => {
          return photo.accessLevel === 2;
        });
        doc.photos.forEach(doc => {
          selectedPhotos.push(doc);
          // console.log('selectedPhotos', selectedPhotos)
        });
      });
    }
  });
  // add user's photos
  const findUserPhotos = UserPhotos.find({ 'ownerId': `${userId}` });
  findUserPhotos.exec((err, results) => {
    if (err) {
      console.log(err);
    } else {
      results.forEach(user => {
        user.photos.forEach(photo => {
          selectedPhotos.push(photo);
          // console.log('selectedPhotos', selectedPhotos)
        });
      });
    }
  });
  // order desc by most recent
  return selectedPhotos.sort((a, b) => {
    return a.uploadDate - b.uploadDate;
  });
})

// find one and update
photosRouter.patch('/single', (req, res) => {

});

photosRouter.patch('/multiple', (req, res) => {
  //update specified information on specified photo(s)


});

photosRouter.put('/', (req, res) => {
  //upload a new photo
  //this functionality is currently in images route, not sure how we want to handle upload.
  //maybe copy image upload over to here, but at somepoint we need to handle photo information and inserting that to db
  //^^^Brenton has the upload stuff figured out, so may need to coordinate with him briefly
})


export default photosRouter;