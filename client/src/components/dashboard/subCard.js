import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const SubCard = props => {
  return (
    <Grid item>
      <Card style={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {props.subject}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {props.teacher}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Resources
          </Button>
          <Button size='small' color='primary'>
            Forum
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default SubCard
