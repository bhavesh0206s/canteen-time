import React from 'react'
import { Container, Grid } from '@material-ui/core'
import AnnouncementCard from './announceCard'
import Header from '../../common/header'

const Announcement = () => {
  return (
    <div>
      <Container>
        <Header />
        <div style={{ height: 75 }} />
        {/* replace this and Loop/Map through all subject overhere */}
        <AnnouncementCard
          subject='ADC'
          teacher='Sarosh'
          announcement='Bhal Bhal Bhal...'
        />
        <AnnouncementCard
          subject='ADC'
          teacher='Sarosh'
          announcement='Bhal Bhal Bhal...'
        />
        <AnnouncementCard
          subject='ADC'
          teacher='Sarosh'
          announcement='Bhal Bhal Bhal...'
        />
      </Container>
    </div>
  )
}

export default Announcement
