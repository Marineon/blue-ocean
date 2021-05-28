import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/CloseRounded';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80vw",
    maxHeight: "80vh",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  select: {
    //padding: theme.spacing(0, 1)
    marginBottom:0,
  },
  tag: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0, 0.5),
    display: "flex",
    width: "max-content",
    alignContent:'center',
    justifyContent: 'center',
  },
  title: {
    minWidth: '100%',
  },
  description: {
    minWidth: '100%',
  }
}));


function CreateOrEditAlbumsModal(props) {
  const [currentTag, setCurrentTag] = useState('');

  const handleKeyPress = (event) => {
    if(event.key === 'Enter' && currentTag){
      event.preventDefault();
      if (currentTag && !props.albumTags.includes(currentTag)) {
        let tempTags = props.albumTags.slice();
        tempTags.push(currentTag);
        props.setAlbumTags(tempTags);
      }
      setCurrentTag('');
    }
  }

  const removeTag = (index) => {
    let tempTags = props.albumTags.slice();
      tempTags.splice(index, 1);
      props.setAlbumTags(tempTags);
  }

  const handlePermissionChange = (event) => {
    props.setAlbumPermission(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isAlbumCreate) {
      //{title: props.albumtitle, descrption: props.albumDescription...}
      //call api to create album
    } else {
      //call api to edit album
    }
    //if successful, call props.onClose()
    //else log error
  }

  const deleteAlbum = () => {
    console.log(props.albumTitle);
  }

  const classes = useStyles();

  return(
  <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="Edit Photos"
        aria-describedby="Modal to edit photos"
      >
      <div style={{
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        width: '80vw',
        maxHeight: '90vh',
      }}
        className={classes.paper}>
        {props.hasPrivilege
        ?  <h2 id="simple-modal-title">
            {props.isAlbumCreate ? 'Create New Album' : 'Editing Album'}
          </h2>
        : null}
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate autoComplete="off"
        >
        <TextField
          className={classes.title}
          id="title"
          label="Title"
          value={props.albumTitle}
          disabled={props.hasPrivilege ? true: false}
          onChange={(e) => {props.setAlbumTitle(e.target.value)}}
        />
        <TextField
          className={classes.description}
          id="description"
          label="Description"
          multiline
          disabled={props.hasPrivilege ? true: false}
          value={props.albumDescription}
          onChange={(e)=> {props.setAlbumDescription(e.target.value)}}
        />
        {props.hasPrivilege
        ? <InputLabel id="demo-simple-select-label">Permission</InputLabel>
        : null
        }
        <Select
          className={classes.select}
          labelId="permission-select-label"
          id="permission-select"
          value={props.albumPermission}
          disabled={props.hasPrivilege ? true: false}
          onChange={handlePermissionChange}
        >
          <MenuItem value={0}>Private</MenuItem>
          <MenuItem value={1}>Friends Only</MenuItem>
          <MenuItem value={2}>Public</MenuItem>
        </Select>
        <br />
        {props.hasPrivilege
        ? <TextField id="standard-basic" label="Add Tags" onKeyPress={handleKeyPress} value={currentTag} onChange={(e)=> {setCurrentTag(e.target.value)}}/>
        : <TextField label="Tags" disabled > Tags </TextField> }
        <br />
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {props.albumTags.map((item, index) => (
          <Paper key={index} className={classes.tag}>
            {item}&nbsp;
            {props.hasPrivilege
            ? <CloseIcon style={{fontSize:16}} onClick={()=>removeTag(index)} />
            : null
            }
          </Paper>
        ))}
        </div>

        {props.hasPrivilege
        ? <Button type="submit" className={classes.button} size="small" variant="contained" color="primary">Submit</Button>
        : null}
        <Button onClick={() => {props.onClose()}} className={classes.button} size="small" variant="contained" color="secondary">
        {props.hasPrivilege
        ? 'Cancel'
        : 'Close'}
        </Button>
        {props.hasPrivilege
        ? <IconButton aria-label="delete" onClick={() => {deleteAlbum()}}>
          <DeleteIcon />
        </IconButton>
        : null}
        </form>
      </div>
    </Modal>
  )
}

export default CreateOrEditAlbumsModal