import express from 'express';

import images from './routes/images.js';


const router = express.Router();
const users = express.Router();
const photos = express.Router();

const routes = (app) => {
  router.get('/api/images/list', images.getImageList);
  router.post('/api/images/upload',
    images.multerUpload.array('file'),
    images.multerS3Upload.array('file')
  );

  app.use(router);
}

export default routes;
