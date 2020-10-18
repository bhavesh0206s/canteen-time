import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Header from '../header'
import AnnouncementList from './announcementList'

const AnnouncementTeacher = () => {
  return (
    <div>
      <Container>
        <Header />
        {/* replace this and Loop/Map through all subject overhere */}
        <AnnouncementList />
      </Container>
    </div>
  )
}

export default AnnouncementTeacher
