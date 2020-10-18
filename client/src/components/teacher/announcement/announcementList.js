import React from 'react'
import AnnouncementCard from './announcementCard'
import AddAnnouncement from './addAnnouncement'

const AnnouncementList = ({handleToggle}) => {
  return (
    <div>
      <div style={{ height: 10 }} />
      <AddAnnouncement handleToggle={handleToggle}/>
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
