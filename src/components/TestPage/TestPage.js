import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import api from '../../api/api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    margin: theme.spacing(1),
  },
  tile: {

  }
}));

const TestPage = () => {
  const [images, setImages] = useState([]);
  const [userId, setUserId] = useState('');
  const classes = useStyles();

  useEffect(() => {
    getImageList();
  }, [images.length])

  const getImageList = async () => {
    const imageList = await api.getImageList();
    setImages(imageList);
  }

  return (
    <Paper className={classes.root} >
      <Typography variant="h2">
        testpage
      </Typography>

      <TextField
        id="outlined-basic"
        label="UserId"
        variant="outlined"
        onChange={(e) => setUserId(e.target.value)}
      />
      <Button variant='contained' onClick={() => {
        api.getUserPhotos(userId);
      }}>
        Get Users Photos api
      </Button>
      <Button variant='contained' onClick={() => {
        api.getFriendsPhotos(userId);
      }}>
        Get Friends Photos api
      </Button>
      <Button variant='contained' onClick={() => {
        api.getPublicPhotos(userId);
      }}>
        Get All Photos api
      </Button>
  
      <GridList cols={3} >
        {images.map((tile) => (
          <GridListTile key={tile.name} >
            <img src={`${tile.url}`} alt={tile} />
          </GridListTile>
        ))}
      </GridList >
    </Paper >
  );
}

export default TestPage;
