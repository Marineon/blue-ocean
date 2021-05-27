import { Photo } from '../index.js';

const photoController = {};

photoController.savePhotoData = (req, res, next) => {
  console.log("🚀 ~ file: photoController.js")

  console.log('req from savePhotoData', req.files.length)
  const userName = req.files[0].metadata.userName;

  req.files.forEach((photo) => {
    new Photo({
      photoId: photo.key,
      ownerId: photo.metadata.userName,
      uploadDate: new Date().toISOString(),
      description: '',
      tags: [],
      accessLevel: 0,  /* 0=private, [1=select friends(futureFeature)], 2=all friends, [3=global(futureFeature)] */
      url: photo.location,
    }).save((err) => {
      throw err
    });
  })

  console.log('userName:', userName);


  if (req.files === undefined) {
    res.status(400).send({ message: "Please upload a file!" });
  }

  res.status(200).send({
    message: "Uploaded the file successfully: " + req.files,
  });
}

export default photoController;