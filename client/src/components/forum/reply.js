import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Button, Menu,  MenuItem, TextField } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
import { useDispatch, useSelector } from 'react-redux';
import { AddReply } from '../../redux/actions/forum';

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

const Reply = ({showReplyModal, handleReplyClick, id, type}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [reply, setReply] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddReply(type, reply, id));
    handleClose();
    handleReplyClick()
  }

  return (
    <Fragment>
      <Drawer open={showReplyModal} onClose={handleReplyClick}  anchor='bottom'>
        <div style={{marginLeft: 20}}>
          <h2>Reply</h2>
        </div>
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="on">
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Type Reply here...."
              multiline
              rows={4}
              className={classes.textField}
              variant="outlined"
              required
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
          </div>
          <div style={{margin: 20, display: 'flex'}}>
            <div>
              <Button variant="contained" color="primary" type="submit" >
                <AssignmentTurnedInSharpIcon />
                Submit
              </Button>
            </div>
            <div style={{marginLeft: 20}}>
              <Button variant="contained" color="secondary" onClick={handleReplyClick}>
                <AssignmentTurnedInSharpIcon />
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Drawer>
    </Fragment>
  );
}
 
export default Reply;