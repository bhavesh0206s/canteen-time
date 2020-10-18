import React, { useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import Header from '../header'
import AnnouncementList from './announcementList'
import AddAnnouncementDropDown from './addAnnouncementDropDown'

const AnnouncementTeacher = () => {
  const [openAnn, setAnn] = useState(false);
  const handleToggle = () => {
    setAnn(!openAnn)
  };
  return (
    <div>
      <Container>
        <Header />
        {/* replace this and Loop/Map through all subject overhere */}
        <AnnouncementList handleToggle={handleToggle}/>
      </Container>
      <AddAnnouncementDropDown openAnn={openAnn} handleToggle={handleToggle}/>
    </div>
  )
}

export default AnnouncementTeacher;
