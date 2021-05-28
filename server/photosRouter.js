// const express = require('express');
import express from 'express';
import database from '../database/index.js';
const { User, Photos } = database;
const photosRouter = express.Router();

// get current users photos
photosRouter.get('/userPhotos', async (req, res) => {
  const { userId } = req.body;
  const findUserPhotos = (id) => Photos.find({ 'userId': id });
  try {
    const userPhotos = await findUserPhotos(userId);
    res.status(200).send(userPhotos.sort((a, b) => {
      return a.uploadDate - b.uploadDate;
    }));
  } catch (err) {
  res.status(500).send(err);
  }
});

// get current users friends photos
photosRouter.get('/friendsPhotos', async (req, res) => {
  const { userId } = req.body;
  const findUserFriends = (id) => User.find({ 'userId': id }).select('friends');
  const findUserFriendPhotos = (friends) => Photos.find({ 'userId': { $in: friends } });
  try {
    const userFriendsObj = await findUserFriends(userId);
    const userFriends = userFriendsObj[0].friends.map(u => u.userId);
    const userFriendPhotos = await findUserFriendPhotos(userFriends);
    const selectedPhotos = userFriendPhotos.filter(photo => photo.accessLevel === 1);
    res.status(200).send(selectedPhotos.sort((a, b) => {
      return a.uploadDate - b.uploadDate;
    }));
  } catch (err) {
    res.status(500).send(err);
  }
});

// friends photos + public photos
photosRouter.get('/photoFeed', async (req, res) => {
  const { userId } = req.body;
  const findUserFriends = (id) => User.find({ 'userId': id }).select('friends');
  const findUserFriendPhotos = (friends) => Photos.find({ 'userId': { $in: friends }});
  const findPublicPhotos = () => Photos.find({ 'accessLevel': 2 });
  try {
    const userFriendsObj = await findUserFriends(userId);
    const userFriends = userFriendsObj[0].friends.map(u => u.userId);
    const userFriendPhotos = await findUserFriendPhotos(userFriends);
    const selectedPhotos = userFriendPhotos.filter(photo => photo.accessLevel === 1);
    const publicPhotos = await findPublicPhotos()
    publicPhotos.forEach(photo => selectedPhotos.push(photo))
    res.status(200).send(selectedPhotos.sort((a, b) => {
    return a.uploadDate - b.uploadDate;
    }));
  } catch (err) {
    res.status(500).send(err);
  }
});

// find one and update
photosRouter.patch('/single', async (req, res) => {
  const { photoId } = req.body;
  const updatableProps = ['description', 'tags', 'accessLevel'];
  try {
    for (const key in req.Body) {
      if (updatableProps.includes(key)) {
        let update = { [key]: req.Body[key] };
        let updatePhotoQuery = (photoId, update) => Photos.updateOne({ 'photoId': photoId }, update);
        await updatePhotoQuery(photoId, update);
        res.sendstatus(200);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// add tags and change accessLevel for multiple
photosRouter.patch('/multiple', (req, res) => {
  const { photoIds } = req.body;
  const updatableProps = ['tags', 'accessLevel'];
  try{
    photoIds.forEach(async(id) => {
      for (const key in req.body) {
        if (updatableProps.includes(key)) {
          let update = { [key]: req.body[key] };
          let updatePhotoQuery = (photoId, update) => Photos.updateOne({ photoId: photoId }, update);
          await updatePhotoQuery(id, update);
        }
      }
    });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }


});

photosRouter.put('/', (req, res) => {
  //upload a new photo (is this the same process for many photos?)
  //this functionality is currently in images route, not sure how we want to handle upload.
  //maybe copy image upload over to here, but at somepoint we need to handle photo information and inserting that to db
  //^^^Brenton has the upload stuff figured out, so may need to coordinate with him briefly
})


export default photosRouter;