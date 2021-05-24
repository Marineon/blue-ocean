import express from 'express';
const photosRouter = express.Router();

photosRouter.get('/allPhotos', (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const { userId } = req.body;
=======
>>>>>>> made comments about endpoint / what queries will need to accomplish
=======
    const { userId } = req.body;
>>>>>>> skeleton of all photos/users end points. (without queries)
=======
    const { userId } = req.body;
>>>>>>> 88c0cab1d552d9536104111c9b4156b5177e51a0
  //get all photos that user has permission to see (from friends and their own for now)
  //either the query or node should verify photo permissions before sending
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
photosRouter.patch('/single', (req, res) => {
=======
photosRouter.patch('/', (req, res) => {
>>>>>>> made comments about endpoint / what queries will need to accomplish
=======
photosRouter.patch('/single', (req, res) => {
>>>>>>> skeleton of all photos/users end points. (without queries)
=======
photosRouter.patch('/single', (req, res) => {
>>>>>>> 88c0cab1d552d9536104111c9b4156b5177e51a0
  //update specified information on specified photo(s)


});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> skeleton of all photos/users end points. (without queries)
=======
>>>>>>> 88c0cab1d552d9536104111c9b4156b5177e51a0
photosRouter.patch('/multiple', (req, res) => {
    //update specified information on specified photo(s)
  
  
  });

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> made comments about endpoint / what queries will need to accomplish
=======
>>>>>>> skeleton of all photos/users end points. (without queries)
=======
>>>>>>> 88c0cab1d552d9536104111c9b4156b5177e51a0
photosRouter.put('/', (req, res) => {
    //upload a new photo
    //this functionality is currently in images route, not sure how we want to handle upload. 
    //maybe copy image upload over to here, but at somepoint we need to handle photo information and inserting that to db
    //^^^Brenton has the upload stuff figured out, so may need to coordinate with him briefly
})

photosRouter.delete('/', (req, res) => {
  //delete photo(s) specified in the request body from the userId's end point
});


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> made comments about endpoint / what queries will need to accomplish
=======
>>>>>>> 88c0cab1d552d9536104111c9b4156b5177e51a0
export default photosRouter;