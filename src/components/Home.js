import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography'
import { UserContext } from '../contexts/user-context'
import { PhotosContext } from '../contexts/photos-context'
import ContextTest from './ContextTest';

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
    </div>
  );
}

export default Home;
