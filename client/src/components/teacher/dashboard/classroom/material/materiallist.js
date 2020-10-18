import React from 'react'
import { Grid } from '@material-ui/core'
import MaterialCard from './materialCard'
import AddMaterial from './addMaterial'

const MaterialList = ({ state }) => {
  return (
    <Grid container spacing={4} justify='center'>
      <AddMaterial />
      {state.fileLinks.map(file => (
        <MaterialCard filename={file.title} filelink={file.link} />
      ))}

      <AddMaterial />
    </Grid>
  )
}

export default MaterialList
