import React from 'react'
import AnnouncementCard from './announcementCard'
import AddAnnouncement from './addAnnouncement'

const AnnouncementList = () => {
  return (
    <div>
      <div style={{ height: 10 }} />
      <AddAnnouncement />
      <AnnouncementCard
        subject='ADC'
        teacher='Sarosh'
        announcement='blah blah blah blah...'
      />
      <AnnouncementCard
        subject='ADC'
        teacher='Sarosh'
        announcement='blah blah blah blah...'
      />
      <AnnouncementCard
        subject='ADC'
        teacher='Sarosh'
        announcement='blah blah blah blah...'
      />
    </div>
  )
}

export default AnnouncementList
