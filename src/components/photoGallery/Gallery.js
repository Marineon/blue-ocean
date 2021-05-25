import React, { useContext, useState, useEffect } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import DeleteIcon from '@material-ui/icons/Delete';

import { PhotosContext } from '../../contexts/photos-context';
//import GalleryTile from './GalleryTile';


let styles = {
  selectedGridListTile: {
    border: "3px solid dodgerBlue",
    maxHeight: window.innerWidth/4
  },
  gridListTile: {
    maxHeight: window.innerWidth/4
  },
  button: {
    margin: "5px 5px",
  },
};

function Gallery(props) {
  const [showModal, setShowModal] = useState(false);
  const [onSelect, setOnSelect] = useState(false);
  const [selected, setSelected] = useState([]);


  const { classes, children, className, ...other } = props;

  const { photos, setPhotos, updatePhoto } = useContext(PhotosContext);

  const handleSelectClick = () => {
    setOnSelect(!onSelect);
    setSelected([]);
  }

  const handlePhotoClick = (index) => {
    if (onSelect) {
      let newArr = selected.slice();
      if(newArr.includes(index)) {
        newArr.splice(newArr.indexOf(index),1)
      } else {
        newArr.push(index)
      }
      setSelected(newArr);
    } else {
    }
  }

  return (
  <Paper id="wrapper">
    <div style={{ height: 45, display:'flex', justifyContent:'flex-end', flexWrap: 'wrap' }}>
      <FormGroup className={classes.formGroup} row>
        {onSelect ?
        <>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          size="small"
        >
          Delete
        </Button>
        <Button size="small" className={classes.button} variant="contained" color="primary">
          Share
        </Button>
        </>
        : null
        }
        <FormControlLabel
          control={<Switch onClick={handleSelectClick} color="primary" />}
          label="Select"
        />
      </FormGroup>
    </div>
    <GridList cols={4} component="div">
      {photos.map((item, index) => (
        // add onclick open photoviewer modal pass in index
        //
        <GridListTile className={classes.gridListTile} onClick={()=>handlePhotoClick(index)} key={index} >
          <img style={selected.includes(index) ? {filter: 'brightness(1.8) opacity(0.61) saturate(1.8)'} : {}}
            srcSet={item.url}
            alt={item.title}
            loading="lazy"
          />
        </GridListTile>
      ))}
    </GridList>
  </Paper>
)
}


export default withStyles(styles)(Gallery);