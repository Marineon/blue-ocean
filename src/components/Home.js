<<<<<<< HEAD
import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography'
import { UserContext } from '../contexts/user-context'
import { PhotosContext } from '../contexts/photos-context'
import ContextTest from './ContextTest';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

=======

import React, { useContext } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom';

import { UserContext } from '../contexts/user-context'
import { PhotosContext } from '../contexts/photos-context'
import ContextTest from './ContextTest';
>>>>>>> ffc3a6f35642e9e7e6bed6024109eb50c47be675

const Home = () => {

  // const { userName, setUserName } = useContext(UserContext)
  // const { photos, setPhotos, updatePhoto } = useContext(UserContext)

  return (
    <div>
      <Typography variant="h2">
        HELLO WORLD!
        <br />

        <ContextTest />
      </Typography>
      <Link to='/getimagestemp' component={RouterLink}>Testing Purposes Only</Link>
    </div>
  );
};

export default Home;
