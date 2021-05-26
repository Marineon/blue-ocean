import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> added bunch of album features
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import { withStyles } from "@material-ui/core/styles";
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import DeleteIcon from '@material-ui/icons/Delete';
<<<<<<< HEAD
=======
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import DeleteIcon from '@material-ui/icons/Delete';
>>>>>>> added bunch of album features
=======
>>>>>>> added bunch of album features
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
<<<<<<< HEAD
<<<<<<< HEAD
// import CardMedia from '@material-ui/core/CardMedia';
=======
import CardMedia from '@material-ui/core/CardMedia';
>>>>>>> added bunch of album features
=======
// import CardMedia from '@material-ui/core/CardMedia';
>>>>>>> added bunch of album features
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit'


import { PhotosContext } from '../../contexts/photos-context';
<<<<<<< HEAD
<<<<<<< HEAD
import CreateOrEditAlbumModal from './CreateOrEditAlbumModal';
=======
import EditAlbumModal from './EditAlbumModal';
>>>>>>> added bunch of album features
=======
import CreateOrEditAlbumModal from './CreateOrEditAlbumModal';
>>>>>>> working on adding create feature on the edit modal

const useStyles = makeStyles({
  root: {
    maxHeight: 100,
<<<<<<< HEAD
<<<<<<< HEAD
    maxWidth: 100,
=======
>>>>>>> added bunch of album features
=======
    maxWidth: 100,
>>>>>>> working on adding create feature on the edit modal
    padding: 0,
  },
  content: {
    padding: 3,
  },
  title: {
    fontSize: 14,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  actions: {
    display:'flex',
    justifyContent:'space-between'
  }
});

function Album (props) {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);


  const { photos,
    //albums
    // setPhotos,
    // updatePhoto
  } = useContext(PhotosContext);

  const handleClose = () => {
    setShowModal(false)
  }
  const handleOpen = () => {
    setShowModal(true)
  }

  const showAlbum = () => {
    let shownAlbum = [];
    props.album.photos.forEach((item)=>{shownAlbum.push(photos[item])});
    props.setShownPhotos(shownAlbum);
    if (props.onSelect) {
      props.handleSelectClick();
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={()=> {
        props.setCurrentAlbum(props.album);
        showAlbum();
        }}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} gutterBottom>
            {props.album.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            By&nbsp;{props.album.owner}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <IconButton onClick={handleOpen} size="small" aria-label="delete">
          {/* Add based on the my images vs shared images */}
          {true ? <EditIcon /> : <InfoIcon />}
        </IconButton>
      </CardActions>
<<<<<<< HEAD
<<<<<<< HEAD
      <CreateOrEditAlbumModal
=======
      <EditAlbumModal
>>>>>>> added bunch of album features
=======
      <CreateOrEditAlbumModal
>>>>>>> working on adding create feature on the edit modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="Edit album"
        aria-describedby="Modal to edit albums"
        album={props.album}
<<<<<<< HEAD
<<<<<<< HEAD
        isCreate={false}
=======
>>>>>>> added bunch of album features
=======
        isCreate={false}
>>>>>>> working on adding create feature on the edit modal
      />
    </Card>
  );

};

export default Album