import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

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
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.gradient} position='static'>
        <Toolbar>
          <Button color='inherit' href='http://localhost:3000/'>
            Dashboard
          </Button>
          <Button color='inherit' href='http://localhost:3000/forum'>
            Forum
          </Button>
          <Button color='inherit' href='http://localhost:3000/announcement'>
            Announcment
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
