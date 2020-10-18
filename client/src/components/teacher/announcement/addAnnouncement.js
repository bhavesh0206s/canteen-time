import React from 'react'
import { Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

const AddAnnouncement = () => {
  return (
    <div>
      <Button
        variant='contained'
        color='default'
        startIcon={<AddCircleOutlineIcon />}
      >
        New Announcment
      </Button>
    </div>
  )
}

export default AddAnnouncement
