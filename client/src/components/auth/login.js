import React, { useState } from 'react'
import {
  Grid,
  TextField,
  Button,
  Typography,
  AppBar,
  Toolbar
} from '@material-ui/core'
import image from '../../assets/images/login.png'
import { Link, Redirect } from 'react-router-dom'
import { login } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

function Login ({ match }) {
  const [formdata, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formdata

  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const onChangeHandler = e => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    dispatch(login(email, password, match.params.user))
  }

  if (isAuthenticated) {
    if (match.params.user === 'student') {
      return <Redirect to='/student/dashboard' />
    } else if (match.params.user === 'teacher') {
      return <Redirect to='/teacher/dashboard' />
    }
  }

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Login as {match.params.user}</Typography>
        </Toolbar>
      </AppBar>
      <Grid container alignItems='center' style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6} justify='center'>
          <img
            src={image}
            style={{ width: '100%', objectFit: 'cover' }}
            alt='cover image'
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems='center'
          direction='column'
          justify='space-between'
          style={{ padding: 10 }}
        >
          <div />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <form
              className='form'
              action='create-profile.html'
              onSubmit={e => onSubmitHandler(e)}
            >
              <TextField
                label='Email'
                margin='normal'
                type='email'
                value={email}
                onChange={e => onChangeHandler(e)}
                name='email'
                required
              />
              <TextField
                label='Password'
                margin='normal'
                type='password'
                name='password'
                minLength='6'
                value={password}
                onChange={e => onChangeHandler(e)}
                required
              />
              <Button
                color='primary'
                variant='contained'
                type='submit'
                value='Register'
              >
                Login
              </Button>
            </form>
            <div style={{ height: 20 }} />
            <Link to={`/${match.params.user}/register`}> Signup </Link>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
