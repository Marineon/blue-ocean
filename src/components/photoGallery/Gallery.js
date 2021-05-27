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
import PhotoModal from '../PhotoView/PhotoModal';
import AlbumRow from '../albums/AlbumRow'
import CreateOrEditAlbumModal from '../albums/CreateOrEditAlbumModal';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
/*-------------------Context Imports-------------------*/
import { PhotosContext } from '../../contexts/photos-context';
import { UserContext } from '../../contexts/user-context';

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
  const user = useContext(UserContext); // user context
  const [showPhotoModal, setShowPhotoModal] = useState(null);
  const [showEditPhotosModal, setShowEditPhotosModal] = useState(false);
  const [onSelect, setOnSelect] = useState(false);
  const [selected, setSelected] = useState([]);
  const [shownPhotos, setShownPhotos] = useState(photos);
  const [showAlbumModal, setShowAlbumModal] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState({});

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
    setShowEditPhotosModal(false)
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
    <AlbumRow
      currentAlbum={currentAlbum}
      setCurrentAlbum={setCurrentAlbum}
      setShownPhotos={setShownPhotos}
      handleSelectClick={handleSelectClick}
      onSelect={onSelect}
    />
    <Paper id="wrapper" className={classes.paper}>
    <div
      style={{
        height: 50,
        display:'flex',
        justifyContent:'space-between',
        flexWrap: 'wrap'
      }}
    >
      <div>
      {onSelect && selected.length > 0 ?
      currentAlbum.title
      ? <IconButton
          onClick={() => removePhotosFromAlbum()}
          aria-label="new-album"
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
      : <IconButton
          onClick={() => setShowAlbumModal(true)}
          aria-label="new-album"
        >
          <AddAlbumIcon />
        </IconButton> : null }
        </div>
      <FormGroup className={classes.formGroup} row>
        {onSelect && selected.length > 0 ?
        <>
        </>
          : null}
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={onSelect}
                onChange={handleSelectClick}
                color="primary"
              />
            }
            label="Select"
          />
        </FormGroup>
        selected={selected}
    />
  </Paper>
    <PhotoModal
        // alt={item.title}
        // srcSet={item.url}
        showModal={showPhotoModal}
        setShowModal={setShowPhotoModal}
      />
    <CreateOrEditAlbumModal
      open={showAlbumModal}
      onClose={handleClose}
      aria-labelledby="Create album"
      aria-describedby="Modal to create albums"
      selected={selected}
      isCreate={true}/>
  </>
)
}
export default withStyles(styles)(Gallery);
