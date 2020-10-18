import React from 'react'
import { Container, Grid } from '@material-ui/core'
import ClassCard from './classCard'
import AddClass from './addClass'
import Header from '../../header'
import { useDispatch, useSelector } from 'react-redux'

const Classrooms = ({ match }) => {
  const myclassrooms = useSelector(state => state.classroom.myclassrooms)

  return (
    <div>
      <Container>
        <Header />
        <div style={{ height: 10 }} />
        <Grid container spacing={2} justify='center'>
          {myclassrooms.map(classroom => (
            <ClassCard
              subject={classroom.classRoomName}
              classroom={classroom}
              // classroom={classroom}
              standard={2}
              match={match}
            />
          ))}
          <AddClass />
        </Grid>
      </Container>
    </div>
  )
}

export default Classrooms
// myclassrooms.map((classroom) => ())}
