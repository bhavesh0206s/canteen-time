import React from 'react'
import { Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

const AddAnnouncement = ({handleToggle}) => {
  return (
    <div>
      <Button
        variant='contained'
        color='default'
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleToggle}
      >
        New Announcment
      </Button>
    </div>
  )
}

export default AddAnnouncement
