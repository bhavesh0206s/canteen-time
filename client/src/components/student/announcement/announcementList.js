import React from 'react'
import AnnouncementCard from './announceCard'
import { useDispatch, useSelector } from 'react-redux'

const AnnouncementList = () => {
  const myclassrooms = useSelector(state => state.classroom.myclassrooms)
  let arr = []
  myclassrooms.map(item => {
    arr = [...arr, ...item.announcements]
  })
  console.log(arr)
  return (
    <div>
      {arr.map(item => (
        <AnnouncementCard title={item.title} description={item.description} />
      ))}
    </div>
  )
}

export default AnnouncementList
