import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Button, TextField } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubForums, fetchSubForums } from "../../redux/actions/forum";
import { useState } from "react";

const subjects = [
  'Math',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Computer'
]

const Topics = ({ topic }) => {
  const [textField, openTextField] = useState(false);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const subjects = useSelector(state => state.forum.subForumList);

  const handleSubmit= (e) =>{
    e.preventDefault();
    openTextField(false)
    dispatch(addSubForums(text))
  }

  useEffect(()=>{
    dispatch(fetchSubForums())
  },[]);

  return (
      <List>
        <div style={{margin: 10}}>
          {!textField && (
            <Button onClick={()=> openTextField(true)} variant="contained" color="primary">
              Create SubForum
            </Button>
          )}
          {textField && (
            <form onSubmit={handleSubmit} noValidate >
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Type Subject Name..."
                  variant="outlined"
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div style={{marginTop: 5, display: 'flex'}}>
                <div>
                  <Button variant="contained" color="primary" type="submit" >
                    Submit
                  </Button>
                </div>
                <div style={{marginLeft: 22}}>
                  <Button variant="contained" color="secondary" onClick={() => openTextField(!textField)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
        <Link to={`/forum`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <ListItem button key='All'>
              <ListItemIcon><MenuBookIcon /></ListItemIcon>
              <ListItemText primary='All' />
            </ListItem>
          </Link>
        {subjects.map((subject, index) => (
          <Link to={`/forum/${subject}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <ListItem button key={subject}>
              <ListItemIcon><MenuBookIcon /></ListItemIcon>
              <ListItemText primary={subject} />
            </ListItem>
          </Link>
        ))}
      </List> 
    // <div>
    //   <Link to={`/forums/${topic}`}>{topic}</Link>
    // </div>
  );
};

export default Topics;
