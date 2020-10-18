import { Container, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import Header from '../header'
import Classrooms from './classroom/classrooms'
import { useDispatch, useSelector } from 'react-redux'
import { loadTeacherClassRooms } from '../../../redux/actions/classroom'

const DashBoardTeacher = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTeacherClassRooms())
  }, [loadTeacherClassRooms])

  return (
    <div>
      <Container>
        <Grid container justify='center'>
          <Classrooms match={match} />
        </Grid>
      </Container>
    </div>
  )
}

export default DashBoardTeacher
