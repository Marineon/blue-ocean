// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import fakeUser from '../src/dummyData/fakeUser.js';
import fakePhotos from '../src/dummyData/fakePhotos.js';

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

const database = {}

const friendSchema = new Schema({
  userId: String,
  userName: String
});

const userSchema = new Schema({
  userId: String,
  fullName: String,
  username: String,
  email: String,
  password: String,
  userLevel: Number,  /* 1=general user, 2='super user', 3=admin  */
  friends: [friendSchema],
  pending: [friendSchema], /* friend requests sent */
  requested: [friendSchema]  /* incoming friend requests */
});

const photosSchema = new Schema({
  userId: String,
  username: String,
  photoId: Number,
  uploadDate: Date,
  description: String,
  tags: Array,
  accessLevel: Number,  /* 0=private, 1=all friends, [2=global(futureFeature)] */
  url: String
});

database.Friend = model('Friend', friendSchema);
database.User = model('User', userSchema);
database.Photos = model('Photos', photosSchema);

/* for populating local mongodb collections:

const onInsert = (err, docs) => {
  console.log(docs);
  if (err) {
    console.log(err);
  } else {
    console.info('%d users were stored', docs.insertedCount);
  }
};

// User.collection.drop();
database.Photos.collection.drop();
// User.collection.insertMany(fakeUser, onInsert);
database.Photos.collection.insertMany(fakePhotos, onInsert);
*/

export default database;

/*

  */