import { Container, Grid } from '@material-ui/core'
import React from 'react'
import SubCard from './subCard'
import AddSub from './addSub'
const DashBoard = ({ match }) => {
  return (
    <div>
      <Container>
        <div style={{ height: 75 }} />
        <Grid container spacing={4} justify='center'>
          {/* replace this and Loop/Map through all subject overhere */}
          <SubCard subject='RA' standard={1} />
          <SubCard subject='RA' standard={2} />
          <SubCard subject='RA' standard={3} />
          <SubCard subject='RA' standard={4} />
          <SubCard subject='RA' standard={5} />
          <SubCard subject='RA' standard={6} />
          <SubCard subject='RA' standard={7} />
          <SubCard subject='RA' standard={8} />
          <SubCard subject='RA' standard={9} />
          <SubCard subject='RA' standard={10} />

          <AddSub />
        </Grid>
      </Container>
    </div>
  )
}

export default DashBoard
