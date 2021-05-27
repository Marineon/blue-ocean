import React, { useContext, useState, useEffect } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import AddAlbumIcon from '@material-ui/icons/CreateNewFolder';
import IconButton from '@material-ui/core/IconButton';
import EditPhotosModal from './EditPhotosModal'
<<<<<<< HEAD
import PhotoModal from '../PhotoView/PhotoModal';
import AlbumRow from '../albums/AlbumRow'
<<<<<<< HEAD
<<<<<<< HEAD
import CreateOrEditAlbumModal from '../albums/CreateOrEditAlbumModal';
<<<<<<< HEAD
=======
>>>>>>> added bunch of album features
=======
import CreateOrEditAlbumModal from '../albums/CreateOrEditAlbumModal';
>>>>>>> committing before push for Tony
=======
import AlbumRow from '../albums/AlbumRow'
>>>>>>> added bunch of album features
=======
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
/*-------------------Context Imports-------------------*/
import { PhotosContext } from '../../contexts/photos-context';
import { UserContext } from '../../contexts/user-context';
<<<<<<< HEAD
>>>>>>> clean up code
=======
>>>>>>> 7fd7ee203048fd2383c0e4cb0290dd59caf76bd2

let styles = {
  gridListTile: {
    maxHeight: window.innerWidth / 4,
  },
  button: {
    margin: "10px 5px",
  },
  paper: {
    maxHeight: 'max-content'
  },
};

function Gallery(props) {
  const { photos,
    // setPhotos,
    // updatePhoto
  } = useContext(PhotosContext);
<<<<<<< HEAD
<<<<<<< HEAD
  const [showModal, setShowModal] = useState(false);
=======
=======
>>>>>>> 7fd7ee203048fd2383c0e4cb0290dd59caf76bd2
  const user = useContext(UserContext); // user context
  const [showPhotoModal, setShowPhotoModal] = useState(null);
  const [showEditPhotosModal, setShowEditPhotosModal] = useState(false);
>>>>>>> filter photos to public/personal/shared
  const [onSelect, setOnSelect] = useState(false);
  const [selected, setSelected] = useState([]);
  const [shownPhotos, setShownPhotos] = useState(photos);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [showAlbumModal, setShowAlbumModal] = useState(false);
=======
>>>>>>> added bunch of album features
=======
  const [showAlbumModal, setShowAlbumModal] = useState(false);
<<<<<<< HEAD
>>>>>>> committing before push for Tony
=======
>>>>>>> added bunch of album features
=======
  const [currentAlbum, setCurrentAlbum] = useState({});
>>>>>>> moved up currentAlbums to gallery for tony

  const { classes,
    view, // render gallery view as = 'public', 'personal', 'shared'
    // children, className, ...other
  } = props;

  // FILTER PHOTOS BY VIEW
  useEffect(() => {
    if (view === 'public') {
      setShownPhotos(photos);
    } else if (view === 'personal') {
      // const personalPhotos = photos.filter(photo => photo.ownerId === user.userId) // PROPER code, when userId 1 exists
      const personalPhotos = photos.filter(photo => photo.ownerId === 2)
      console.log(personalPhotos);
      setShownPhotos(personalPhotos);
    } else if (view === 'shared') {
      const friendIds = user.friends.map(friend => friend.userId); // map friend userIds to array
      const sharedPhotos = photos.filter(photo => {
        /* filter shared photos to user and friends Ids */
        // return friendIds.concat([user.userId]).includes(photo.ownerId); // PROPER CODE, when valid friend userId's exist
        return friendIds.concat([3]).includes(photo.ownerId); // filter shared photos to user and friends Ids
      })
      setShownPhotos(sharedPhotos);
    }
  }, [view]) // update 'shownPhotos' when 'view' changes

  const handleSelectClick = () => {
    setOnSelect(!onSelect);
    setSelected([]);
  };

  const handlePhotoClick = (index) => {
    if (onSelect) {
      let newArr = selected.slice();
      if (newArr.includes(index)) {
        newArr.splice(newArr.indexOf(index), 1);
      } else {
        newArr.push(index);
      }
      setSelected(newArr);
    } else {
      // console.log('set modal photo as', photos[index])
      setShowPhotoModal(photos[index]);
    }
  };

  const handleClose = () => {
<<<<<<< HEAD
    setShowEditPhotosModal(false)
=======
    setShowModal(false)
<<<<<<< HEAD
>>>>>>> committing before push for Tony
=======
>>>>>>> committing before push for Tony
    setShowAlbumModal(false)
  }
  const handleOpen = () => {
    setShowEditPhotosModal(true)
  }

  const removePhotosFromAlbum = () => {
    console.log('Deleting ' + JSON.stringify(selected) + ' from ' + currentAlbum.title);
  }

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <AlbumRow setShownPhotos={setShownPhotos} handleSelectClick={handleSelectClick} onSelect={onSelect}/>
    <Paper id="wrapper">
    <div style={{ height: 50, display:'flex', justifyContent:'space-between', flexWrap: 'wrap' }}>
      <IconButton onClick={() => setShowAlbumModal(true)} aria-label="new-album">
=======
=======
>>>>>>> added bunch of album features

    <AlbumRow setShownPhotos={setShownPhotos} handleSelectClick={handleSelectClick} onSelect={onSelect}/>
    <Paper id="wrapper">
    <div style={{ height: 50, display:'flex', justifyContent:'space-between', flexWrap: 'wrap' }}>
      <IconButton aria-label="new-album">
<<<<<<< HEAD
>>>>>>> added bunch of album features
=======
    <AlbumRow setShownPhotos={setShownPhotos} handleSelectClick={handleSelectClick} onSelect={onSelect}/>
=======
    <AlbumRow currentAlbum={currentAlbum} setCurrentAlbum={setCurrentAlbum} setShownPhotos={setShownPhotos} handleSelectClick={handleSelectClick} onSelect={onSelect}/>
>>>>>>> moved up currentAlbums to gallery for tony
    <Paper id="wrapper">
    <div style={{ height: 50, display:'flex', justifyContent:'space-between', flexWrap: 'wrap' }}>
      <IconButton onClick={() => setShowAlbumModal(true)} aria-label="new-album">
>>>>>>> committing before push for Tony
=======
>>>>>>> added bunch of album features
      {onSelect && selected.length > 0 ?
          <AddAlbumIcon /> : null }
       </IconButton>
      <FormGroup className={classes.formGroup} row>
        {onSelect && selected.length > 0 ?
        <>
          <Button
            onClick={handleOpen}
            size="small"
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </>
          : null}
          <FormControlLabel
            control={<Switch size="small" checked={onSelect} onChange={handleSelectClick} color="primary" />}
            label="Select"
          />
        </FormGroup>
      </div>
      <GridList cols={4} component="div">
        {shownPhotos.map((item, index) => (
          // add onclick open photoviewer modal pass in index
          //
          <GridListTile
            className={classes.gridListTile}
            onClick={() => handlePhotoClick(index)}
            key={index}
          >
            <img
              style={
                selected.includes(index)
                  ? { filter: "brightness(1.8) opacity(0.61) saturate(1.8)" }
                  : {}
              }
              srcSet={item.url}
              alt={item.title}
              loading="lazy"
            />
          </GridListTile>
      ))}
    </GridList>
    <EditPhotosModal
        open={showEditPhotosModal}
        onClose={handleClose}
        aria-labelledby="Edit Photos"
        aria-describedby="Modal to edit photos"
        selected={selected}
    />
  </Paper>
<<<<<<< HEAD
    <PhotoModal
        // alt={item.title}
        // srcSet={item.url}
        showModal={showPhotoModal}
        setShowModal={setShowPhotoModal}
      />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> committing before push for Tony
    <CreateOrEditAlbumModal
      open={showAlbumModal}
      onClose={handleClose}
      aria-labelledby="Create album"
      aria-describedby="Modal to create albums"
      selected={selected}
      isCreate={true}/>
<<<<<<< HEAD
=======
>>>>>>> added bunch of album features
=======
>>>>>>> committing before push for Tony
  </Paper>
=======
>>>>>>> added bunch of album features
  </>
)
}

export default withStyles(styles)(Gallery);
