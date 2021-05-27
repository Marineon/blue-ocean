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
  userId: String,
  userName: String
});

const userSchema = new Schema({
  userId: Number,
  fullName: String,
  username: String,
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
  ownerId: String,
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
const req = {
  body: {
    userId: 3,
    photoId: 1,
    description: 'this is the description',
    addTags: ['new', 'tag'],
    removeTags: ['coachella', 'mmpr'],
    accessLevel: 0
  }
}
const {userId, photoId} = req.body;

const updateOne = async (userId, photoId) => {
  const findUserPhotosObj = (userId) => UserPhotos.find({ ownerId: userId});
  const userPhotosObj = await findUserPhotosObj(userId);
  console.log('userPhotosObj', userPhotosObj[0].photos);
  const photoToUpdate = (photoId) => {
    console.log('photoId:', photoId)
    userPhotosObj[0].photos.forEach(photo => photo.photoId === photoId)
  };
  console.log('photoToUpdate', photoToUpdate(photoId))
};

updateOne(userId, photoId);
// UserPhotos.find({ownerId: 3}).select('photos').
// exec((err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res[0].photos[0]);
//   }
// })
*/

module.exports = {
  Friend, User, Photo, UserPhotos
};
