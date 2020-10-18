import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Header from '../../common/header'
import Subject from './subject/subject'

const DashBoard = ({ match }) => {
  return (
    <div>
      <Container>
        <Header />
        <div style={{ height: 10 }} />
        <Subject />
      </Container>
    </div>
  )
}

export default DashBoard
