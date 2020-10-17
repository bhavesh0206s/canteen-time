import React from 'react'
import { Grid, TextField, Button, Link } from '@material-ui/core'
import image from '../../assets/images/login.png'

function Login () {
  const inputProps = {
    step: 300,
  };
  
  return (
    <div>
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
            <TextField label='Email' margin='normal' fullWidth/>
            <TextField label='Password' margin='normal' />
            <div style={{ height: 20 }} />
            <Button color='primary' variant='contained'>
              Log in
            </Button>
            <div style={{ height: 20 }} />
            <Link
              component='button'
              variant='body2'
              onClick={() => {
                console.info("Sign-up")
                
              }}
            >
              Sign-up
            </Link>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
