import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const SubCard = ({ teacher, subject, match, classroom }) => {
  return (
    <Grid item>
      <Card
        style={{
          maxWidth: 350,
          minWidth: 300
        }}
      >
        <Link
          to={{
            pathname: `/student/classroom/${classroom.classRoomCode}`,
            state: classroom
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {subject}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {teacher}
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
        </Link>
      </Card>
    </Grid>
  )
}

export default SubCard
