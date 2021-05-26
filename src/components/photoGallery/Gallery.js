import React, { useContext, useState } from "react";
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
import { PhotosContext } from '../../contexts/photos-context';
import EditPhotosModal from './EditPhotosModal'
import PhotoModal from '../PhotoView/PhotoModal';
import AlbumRow from '../albums/AlbumRow'
import CreateOrEditAlbumModal from '../albums/CreateOrEditAlbumModal';


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
  const [showModal, setShowModal] = useState(false);
  const [onSelect, setOnSelect] = useState(false);
  const [selected, setSelected] = useState([]);
  const [shownPhotos, setShownPhotos] = useState(photos);
  const [showAlbumModal, setShowAlbumModal] = useState(false);

  const { classes,
    // children, className, ...other
  } = props;


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
    <AlbumRow setShownPhotos={setShownPhotos} handleSelectClick={handleSelectClick} onSelect={onSelect}/>
    <Paper id="wrapper">
    <div style={{ height: 50, display:'flex', justifyContent:'space-between', flexWrap: 'wrap' }}>
      <IconButton onClick={() => setShowAlbumModal(true)} aria-label="new-album">
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
  </Paper>
  </>
)
}

export default withStyles(styles)(Gallery);
