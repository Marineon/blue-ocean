import React from 'react';
// import { useContext } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom';

// import Search from './navbar/Search';
// import NavDrawer from './navbar/NavDrawer'

// import { UserContext } from '../contexts/user-context'
// import { PhotosContext } from '../contexts/photos-context'
import ContextTest from './ContextTest';

const Home = () => {
  return (
    <div>
      <Typography variant="h2">
        HELLO WORLD!
        <br />
        <ContextTest />
      </Typography>
      <Link to='/testpage' component={RouterLink}>Testing TestPage</Link>
      <br/>
      <Link to='/createuser' component={RouterLink}>Testing Create User</Link>
      <br/>
      <Link to='/login' component={RouterLink}>Testing Login</Link>
      <br/>
      <Link to='/signup' component={RouterLink}>Testing Sign Up</Link>
    </div>
  );
};

export default Home;