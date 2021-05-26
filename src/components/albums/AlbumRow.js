import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
<<<<<<< HEAD
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import DeleteIcon from '@material-ui/icons/Delete';
=======
=======
>>>>>>> added bunch of album features
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import DeleteIcon from '@material-ui/icons/Delete';
<<<<<<< HEAD
>>>>>>> added bunch of album features
=======
>>>>>>> added bunch of album features
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';

import { PhotosContext } from '../../contexts/photos-context';
import Album from './Album';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import CreateOrEditAlbumModal from './CreateOrEditAlbumModal';
=======
import EditAlbumModal from './EditAlbumModal';
>>>>>>> added bunch of album features
=======
import CreateOrEditAlbumModal from './CreateOrEditAlbumModal';
>>>>>>> working on adding create feature on the edit modal
=======
import EditAlbumModal from './EditAlbumModal';
>>>>>>> added bunch of album features

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'no-wrap',
    marginBottom: theme.spacing(1),
    overflowX: 'auto',
    '& > *': {
      margin: theme.spacing(1),
      minWidth: 100,
      // height: theme.spacing(16),
    },
    title: {
      fontSize: 14,
    },
    button: {
      margin: theme.spacing(4, 0)
    }
  },
}));

function AlbumRow (props) {
  const classes = useStyles();

  const { photos,
    albums
    // setPhotos,
    // updatePhoto
  } = useContext(PhotosContext);
  const [currentAlbum, setCurrentAlbum] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false)
  }
  const handleOpen = () => {
    setShowModal(true)
  }

  const returnToAll = () => {
    props.setShownPhotos(photos);
    setCurrentAlbum({});
  }

  return (
    <Paper className={classes.root}>

      {currentAlbum.title ?
      <>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <CreateOrEditAlbumModal
=======
      <EditAlbumModal
>>>>>>> added bunch of album features
=======
      <CreateOrEditAlbumModal
>>>>>>> working on adding create feature on the edit modal
=======
      <EditAlbumModal
>>>>>>> added bunch of album features
      open={showModal}
      onClose={handleClose}
      aria-labelledby="Edit album"
      aria-describedby="Modal to edit albums"
      album={currentAlbum}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      isCreate={false}
=======
>>>>>>> added bunch of album features
=======
      isCreate={false}
>>>>>>> working on adding create feature on the edit modal
=======
>>>>>>> added bunch of album features
      />
      <div style={{
        textAlign: 'start',
        width: '100%',
      }}>
      <Typography className={classes.title} gutterBottom component="h2">
        {currentAlbum.title}
      </Typography>
      <Typography variant="body2" component="p">
            By&nbsp;{currentAlbum.description}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            By&nbsp;{currentAlbum.owner}
      </Typography>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <IconButton onClick={handleOpen} size="small" aria-label="delete">
            {/* Add based on the my images vs shared images */}
            {true ? <EditIcon /> : <InfoIcon />}
          </IconButton>
          <Button size="small" className={classes.button} onClick={returnToAll} variant="contained" color="secondary">Exit</Button>
        </div>
      </div>
      </>
      : albums.map((item, index) => (
        <Album
          key={index}
          album={item}
          setCurrentAlbum={setCurrentAlbum}
          setShownPhotos={props.setShownPhotos}
          handleSelectClick={props.handleSelectClick}
          onSelect={props.onSelect}
        />
      ))}

    </Paper>
  );


};

export default AlbumRow