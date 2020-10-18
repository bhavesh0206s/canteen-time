import { AppBar, Button, Container, Grid, IconButton } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/core/styles'
import MaterialList from './materiallist'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  gradient: {
    background: 'linear-gradient(to right, #001510, #00bf8f)'
  }
})

const MaterialPage = ({ location: { state } }) => {
  const classes = useStyles()
  console.log(state)
  return (
    <Container>
      <AppBar className={classes.gradient}>
        <Toolbar>
          <IconButton color='inherit'>
            <Link to='/teacher/dashboard'>
              <ArrowBackIcon />
            </Link>
          </IconButton>
          <Typography variant='h6'>{state.classRoomName}</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ height: 75 }} />
      <MaterialList state={state} />
    </Container>
  )
}

MaterialPage.defaultProps = {
  subject: 'Subject Name Here'
}

export default MaterialPage
