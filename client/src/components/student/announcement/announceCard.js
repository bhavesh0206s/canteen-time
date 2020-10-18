import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const AnnouncementCard = ({ title, description }) => {
  return (
    <Grid item>
      <Card style={{ marginTop: 10 }}>
        <CardActionArea>
          <CardContent>
            <Grid container direction='row'>
              <Typography gutterBottom variant='h5' component='h4'>
                {title}
              </Typography>
            </Grid>

            <Typography gutterBottom component='h4'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default AnnouncementCard
