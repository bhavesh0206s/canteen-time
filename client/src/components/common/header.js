import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  gradient: {
    background: 'linear-gradient(to right, #001510, #00bf8f)',
  },
  title: {
    flexGrow: 1
  }
}))

export default function Header (props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.gradient} position='static'>
        <Toolbar>
          <Link to='/student/dashboard' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Button color='inherit'>
              Dashboard
            </Button>
          </Link>
          <Link to='/forum' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Button color='inherit'>
              Forum
            </Button>
          </Link>
          <Link to='/student/announcement' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Button color='inherit'>
              Announcment
            </Button>
          </Link>
          <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Button variant='contained' onClick={handleLogout} color='secondary'>
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
