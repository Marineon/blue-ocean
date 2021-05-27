// const express = require('express');
import express from 'express';
import database  from '../database/index.js'
const photosRouter = express.Router();

// get current users photos + all photos shared with them
photosRouter.get('/userPhotos', async (req, res) => {
  const { userId } = req.query;
  console.log(`querying db for ${userId}'s photos`)
  const findUserPhotos = (userId) => database.UserPhotos.find({ 'ownerId': userId });
  try {
    const userPhotosObj = await findUserPhotos(userId);
    console.log(userPhotosObj);
    const userPhotos = userPhotosObj.map(p => p.photos).flat();
    res.status(200).send(userPhotos.sort((a, b) => {
      return a.uploadDate - b.uploadDate;
    }));
  } catch (error) {
    res.status(500).send(error);
  }
});

// get current users photos + all photos shared with them
photosRouter.get('/friendsPhotos', async (req, res) => {
  const { userId } = req.query;
  console.log(`querying db for ${userId}'s friends photos`)
  const findFriendsPhotos = (userId) => database.FriendPhotos.find({ 'ownerId': userId });
  try {
    const userPhotosObj = await findFriendsPhotos(userId);
    console.log(userPhotosObj);
    const userPhotos = userPhotosObj.map(p => p.photos).flat();
    res.status(200).send(userPhotos.sort((a, b) => {
      return a.uploadDate - b.uploadDate;
    }));
  } catch (error) {
    res.status(500).send(error);
  }
});

photosRouter.get('/getAllPhotos', async (req, res) => {
  const findAllPhotos = () => database.Photos.find({});
  try {
    const allPhotos = await findAllPhotos();
    const allPublicPhotos = allPhotos.filter(p => p.accessLevel === 2);
    res.status(200).send(allPublicPhotos.sort((a, b) => {
      return a.uploadDate - b.uploadDate;
    }));
  } catch (error) {
    res.status(500).send(error);
  }
});

// find one and update
photosRouter.patch('/single', (req, res) => {
  // what fields need to be updated?


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