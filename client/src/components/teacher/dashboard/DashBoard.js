import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Header from '../header'
import Classrooms from './classroom/classrooms'
const DashBoard = ({ match }) => {
  return (
    <div>
      <Container>
        <Grid container spacing={4} justify='center'>
          {/* replace this and Loop/Map through all subject overhere */}
          <Classrooms />
        </Grid>
      </Container>
    </div>
  )
}

export default DashBoard
