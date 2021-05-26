// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import fakeUser from '../dummyData/fakeUser.js';
import fakePhotos from '../dummyData/fakePhotos.js';

const { Schema, model } = mongoose;
mongoose.connect('mongodb://localhost/blue', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('mongoose connection error', error);
});

db.once('open', () => {
  console.info('mongoose connected successfully');
});

const friendSchema = new Schema({
  userId: Number,
  userName: String
});

const userSchema = new Schema({
  userId: Number,
  fullName: String,
  email: String,
  password: String,
  userLevel: Number,  /* 1=general user, 2='super user', 3=admin  */
  friends: [friendSchema],
  pending: [friendSchema], /* friend requests sent */
  requested: [friendSchema]  /* incoming friend requests */
});

const photoSchema = new Schema({
  ownerName: String,
  photoId: Number,
  uploadDate: Date,
  description: String,
  tags: Array,
  accessLevel: Number,  /* 0=private, [1=select friends(futureFeature)], 2=all friends, [3=global(futureFeature)] */
  url: String
});

const userPhotosSchema = new Schema({
  ownerId: Number,
  ownerName: String,
  photos: [photoSchema]
});

const Friend = model('Friend', friendSchema);
const User = model('User', userSchema);
const Photo = model('Photo', photoSchema);
const UserPhotos = model('UserPhotos', userPhotosSchema);

/* for populating local mongodb collections:

const onInsert = (err, docs) => {
  console.log(docs);
  if (err) {
    console.log(err);
  } else {
    console.info('%d users were stored', docs.insertedCount);
  }
};

User.collection.drop();
UserPhotos.collection.drop();
User.collection.insertMany(fakeUser, onInsert);
UserPhotos.collection.insertMany(fakePhotos, onInsert);
*/

/*   Below is for testing purposes - to be deleted soon
let userFriends = [];
const findUserFriends = User.find({'userId': 2})
  .select('friends');

findUserFriends.exec((err, friends) => {
  if (err) {
    console.log(err);
  } else {
    friends.forEach(f => {
      userFriends.push(f.friends);
      console.log('userFriends', userFriends);
    });
  }
});

const selectedPhotos = [];
const userFriends = [3,2]
const findFriendsPhotos = UserPhotos.find({'ownerId': { $in: userFriends }})
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
      });
      console.log('selectedPhotos', );
    });
  }
})


const findUserPhotos = UserPhotos.find({'ownerId': 2});
findUserPhotos.exec((err, results) => {
  if (err) {
    console.log(err);
  } else {
    results.forEach(user => {
      user.photos.forEach(photo => {
        selectedPhotos.push(photo);
        console.log('selectedPhotos', selectedPhotos)
      });
    });
  }
});

*/

module.exports = {
  Friend, User, Photo, UserPhotos
};
