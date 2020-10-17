import { Container, Grid } from '@material-ui/core'
import React from 'react'
import SubCard from './subCard'

const DashBoard = ({ match }) => {
  return (
    <div>
      <Container>
        <div style={{ height: 75 }} />
        <Grid container spacing={2} justify='center'>
          {/* replace this and Loop/Map through all subject overhere */}
          <SubCard subject='ADC' teacher='Prof. Sarosh Dastoor' />
          <SubCard subject='RA' teacher='Prof. Neetin Patel' />
          <SubCard subject='AM' teacher='Prof. Pritesh Saksena' />
          <SubCard subject='CPD' teacher='Prof. Vandna Shah' />
          <SubCard subject='SS' teacher='Prof. Maulin Joshi' />
          <SubCard subject='SS' teacher='Prof. Maulin Joshi' />
          <SubCard subject='SS' teacher='Prof. Maulin Joshi' />
          <SubCard subject='SS' teacher='Prof. Maulin Joshi' />
          <SubCard subject='SS' teacher='Prof. Maulin Joshi' />
          <SubCard subject='SS' teacher='Prof. Maulin Joshi' />
          <SubCard subject='SS' teacher='Prof. Maulin Joshi' />
        </Grid>
      </Container>
    </div>
  )
}

export default DashBoard
