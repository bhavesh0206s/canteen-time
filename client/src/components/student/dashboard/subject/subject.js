import React from 'react'
import { Container, Grid } from '@material-ui/core'
import SubCard from './subCard'
import AddSub from './addSub'
import { useDispatch, useSelector } from 'react-redux'

const Subject = ({ match }) => {
  const myclassrooms = useSelector(state => state.classroom.myclassrooms)

  return (
    <div>
      <Container>
        <Grid container spacing={2} justify='center'>
          {myclassrooms.map(classroom => (
            <SubCard
              subject={classroom.classRoomName}
              classroom={classroom}
              match={match}
              teacher={classroom.createdBy}
            />
          ))}
          <AddSub />
        </Grid>
      </Container>
    </div>
  )
}

export default Subject
