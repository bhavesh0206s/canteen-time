import React from 'react'
import { Container, Grid } from '@material-ui/core'
import ClassCard from './classCard'
import AddClass from './addClass'
import Header from '../../header'

const Classrooms = () => {
  return (
    <div>
      <Container>
        <Header />
        <div style={{ height: 10 }} />
        <Grid container spacing={2} justify='center'>
          {/* replace this and Loop/Map through all subject overhere */}
          <ClassCard subject='RA' standard={1} />
          <ClassCard subject='RA' standard={2} />
          <ClassCard subject='RA' standard={3} />
          <ClassCard subject='RA' standard={4} />
          <ClassCard subject='RA' standard={5} />
          <ClassCard subject='RA' standard={6} />
          <ClassCard subject='RA' standard={7} />
          <ClassCard subject='RA' standard={8} />
          <ClassCard subject='RA' standard={9} />
          <ClassCard subject='RA' standard={10} />

          <AddClass />
        </Grid>
      </Container>
    </div>
  )
}

export default Classrooms
