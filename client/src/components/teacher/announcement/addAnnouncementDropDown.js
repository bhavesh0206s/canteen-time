import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Button, Menu,  MenuItem, TextField } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) =>( {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '15ch',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '50ch',
  },
}));


const subjects = [
  'Math',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Computer'
]

const AddAnnouncementDropDown = ({handleToggle, openAnn}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('')
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleToggle();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setSelectedTopic(e.target.textContent)
    setAnchorEl(null);
  };

  const renderMenu = () => (
    <div style={{paddingTop: 10, paddingBottom: 10}}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {selectedTopic.length === 0 ? 'Subject' : selectedTopic }
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {subjects.map(subject => (
          <MenuItem onClick={handleClose}>{subject}</MenuItem>
        ))}
      </Menu>
    </div>
  )

  return (
    <Fragment>
      <Drawer open={openAnn} onClose={handleToggle}  anchor='bottom'>
        <div style={{marginLeft: 20}}>
          <h2>Announcement</h2>
        </div>
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="on">
          <div>
            {renderMenu()}
            <TextField
              id="outlined-multiline-static"
              label="Enter Title"
              className={classes.textField}
              variant="outlined"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="outlined-multiline-static"
              label="Enter Detail..."
              rows={3}
              className={classes.textField}
              variant="outlined"
              multiline
              value={detail}
              style={{marginTop: 15}}
              required
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>
          <div style={{margin: 20, display: 'flex'}}>
            <div>
              <Button variant="contained" color="primary" type="submit" >
                Submit
              </Button>
            </div>
            <div style={{marginLeft: 20}}>
              <Button variant="contained" color="secondary" onClick={handleToggle}>
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Drawer>
    </Fragment>
  );
}
 
export default AddAnnouncementDropDown;