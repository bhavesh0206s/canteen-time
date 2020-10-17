import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Add from '@material-ui/icons/Add'

const AddSub = props => {
  return (
    <Grid item>
      <Card style={{ maxWidth: 350, minWidth: 300 }}>
        <CardActionArea>
          <AddCircleIcon
            color='primary'
            style={{
              fontSize: 'large',
              width: 90,
              height: 90,
              marginLeft: '40%'
            }}
          />
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary' startIcon={<Add />}>
            Add new classroom
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default AddSub
