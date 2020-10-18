import React from 'react'
import { Grid } from '@material-ui/core'
import MaterialCard from './materialCard'
import AddMaterial from './addMaterial'

const MaterialList = () => {
  return (
    <Grid container spacing={4} justify='center'>
      <AddMaterial />
      <MaterialCard fileName='Notes for mid-sem' />
      <MaterialCard fileName='Notes of ch-2' />
      <MaterialCard fileName='Ch-5 PPT' />
      <AddMaterial />
    </Grid>
  )
}

export default MaterialList
