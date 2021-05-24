import express from 'express';
const photosRouter = express.Router();

photosRouter.get('/allPhotos', (req, res) => {
    const { userId } = req.body;
  //get all photos that user has permission to see (from friends and their own for now)
  //either the query or node should verify photo permissions before sending
});

photosRouter.patch('/single', (req, res) => {
  //update specified information on specified photo(s)


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

photosRouter.delete('/', (req, res) => {
  //delete photo(s) specified in the request body from the userId's end point
});


export default photosRouter;