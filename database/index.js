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
/*
const userId = 2;

const selectAllImages = async (id) => {
  const findUserFriends = (id) => User.find({ 'userId': id }).select('friends');
  const findUserFriendPhotos = (friends) => UserPhotos.find({ 'ownerId': { $in: friends } });
  const findUserPhotos = (id) => UserPhotos.find({ 'ownerId': id });

  const userFriendsObj = await findUserFriends(2);
  const userFriends = userFriendsObj[0].friends.map(u => u.userId);

  const userFriendPhotos = await findUserFriendPhotos(userFriends);
  const selectedPhotos = userFriendPhotos.map(user => user.photos.filter(p => p.accessLevel === 2)).flat();

  const userPhotosObj = await findUserPhotos(userId);
  const userPhotos = userPhotosObj.map(p => p.photos).flat();
  userPhotos.forEach(p => selectedPhotos.push(p))
  console.log(selectedPhotos.sort((a, b) => {
    return a.uploadDate - b.uploadDate;
  }))
}
*/
module.exports = {
  Friend, User, Photo, UserPhotos
};
