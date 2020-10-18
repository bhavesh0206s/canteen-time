import { Container, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import Header from '../../common/header'
import Subject from './subject/subject'
import { useDispatch, useSelector } from 'react-redux'
import { loadStudentClassRooms } from '../../../redux/actions/classroom'

const DashBoardStudent = ({ match }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadStudentClassRooms())
  }, [loadStudentClassRooms])
  return (
    <div>
      <Container>
        <Header />
        <div style={{ height: 10 }} />
        <Subject match={match} />
      </Container>
    </div>
  )
}

export default DashBoardStudent