import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth'

const useStyles = makeStyles(theme => ({
  gradient: {
    background: 'linear-gradient(to right, #001510, #00bf8f)'
  }
}))

const Landing = () => {
  const classes = useStyles()
  return (
    <div>
      <Container>
        <AppBar className={classes.gradient} position='static'>
          <Toolbar>
            <Typography variant='h6'>Continue As...</Typography>
          </Toolbar>
        </AppBar>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20
          }}
        >
          <div>
            <Link to='/teacher/login'>
              <Button variant='contained' color='primary'>
                Teacher
              </Button>
            </Link>
          </div>
          <div>
            <Link to='/student/login'>
              <Button variant='contained' color='primary'>
                Student
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Landing
