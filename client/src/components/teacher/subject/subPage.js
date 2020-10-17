import { AppBar, Button, Container, IconButton } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const SubPage = props => {
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <IconButton color='inherit'>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant='h6'>{props.subject}</Typography>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

SubPage.defaultProps = {
  subject: 'Title Here'
}

export default SubPage
