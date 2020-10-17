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
      <Card style={{ marginTop: 10 }}>
        <CardActionArea>
          <CardContent>
            <Grid container direction='row'>
              <Typography gutterBottom component='h4'>
                {props.subject}
              </Typography>
              <div style={{ width: 5 }}></div>
              <Typography variant='body2' color='textSecondary'>
                by {props.teacher}
              </Typography>
            </Grid>

            <Typography gutterBottom variant='h5' component='h4'>
              {props.announcment}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary' variant='contained'>
            More Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default SubCard
