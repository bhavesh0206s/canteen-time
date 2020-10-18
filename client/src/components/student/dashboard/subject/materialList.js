import React from 'react'
import { Grid } from '@material-ui/core'
import SubMaterial from './subMaterial'

const MaterialList = () => {
  return (
    <Grid container spacing={4} justify='center'>
      <SubMaterial fileName='Notes for mid-sem' />
      <SubMaterial fileName='Notes of ch-2' />
      <SubMaterial fileName='Ch-5 PPT' />
    </Grid>
  )
}

export default MaterialList
