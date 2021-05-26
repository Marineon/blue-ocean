import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit'


import { PhotosContext } from '../../contexts/photos-context';
import CreateOrEditAlbumModal from './CreateOrEditAlbumModal';

const useStyles = makeStyles({
  root: {
    maxHeight: 100,
    maxWidth: 100,
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
      <CreateOrEditAlbumModal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="Edit album"
        aria-describedby="Modal to edit albums"
        album={props.album}
        isCreate={false}
      />
    </Card>
  );

};

export default Album