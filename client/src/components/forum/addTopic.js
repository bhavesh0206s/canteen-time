import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Button, Menu,  MenuItem, TextField } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';

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
      width: '25ch',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100ch',
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

const AddTopic = ({openAddTopic, handleAddDrawer}) => {
  const classes = useStyles();

  const [selectedTopic, setSelectedTopic] = useState('')
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setSelectedTopic(e.target.textContent)
    setAnchorEl(null);
  };

  const handleSubmit = () => {

  }

  const renderMenu = () => (
    <div style={{paddingTop: 10, paddingBottom: 10}}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {selectedTopic.length === 0 ? 'Select Subject' : selectedTopic }
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
      <Drawer open={openAddTopic} onClose={handleAddDrawer}  anchor='bottom'>
        <div style={{margin: 15}}>
          <h2>Create a new Topic</h2>
        </div>
        <form className={classes.root} noValidate autoComplete="on">
          <div>
            <TextField className={classes.textField} fullWidth id="outlined-basic" label="Type title" variant="outlined" />
            {renderMenu()}
            <TextField
              id="outlined-multiline-static"
              label="Type Details here...."
              multiline
              rows={4}
              className={classes.textField}
              variant="outlined"
            />
          </div>
          <div style={{margin: 20}}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              <AssignmentTurnedInSharpIcon />
              Submit
            </Button>
          </div>
        </form>
      </Drawer>
    </Fragment>
  );
}
 
export default AddTopic;