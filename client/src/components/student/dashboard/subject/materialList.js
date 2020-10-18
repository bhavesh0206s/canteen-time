import React from 'react'
import { Grid } from '@material-ui/core'
import SubMaterial from './subMaterial'

const MaterialList = ({ state }) => {
  console.log(state)
  return (
    <Grid container spacing={4} justify='center'>
      {state.fileLinks.map(item => (
        <SubMaterial filename={item.title} filelink={item.link} />
      ))}
    </Grid>
  )
}

export default MaterialList
