import { AppBar, Button, Container, Grid, IconButton } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/core/styles'
import MaterialList from './materiallist'

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

const MaterialPage = props => {
  const classes = useStyles()

  return (
    <Container>
      <AppBar className={classes.gradient}>
        <Toolbar>
          <IconButton color='inherit'>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant='h6'>{props.subject}</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ height: 75 }} />
      <MaterialList />
    </Container>
  )
}

MaterialPage.defaultProps = {
  subject: 'Subject Name Here'
}

export default MaterialPage