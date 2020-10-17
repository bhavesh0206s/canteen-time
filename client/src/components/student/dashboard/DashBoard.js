import { Container, Grid } from '@material-ui/core'
import React from 'react'
import SubCard from '../subject/subCard'
import Header from '../../common/header'
import Subject from '../subject/subject'

const DashBoard = ({ match }) => {
  return (
    <div>
      <Container>
        <Header />
        <div style={{ height: 75 }} />
        <Subject />
      </Container>
    </div>
  )
}

export default DashBoard
