import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'

const ClassCard = ({ classroom, standard, subject, match }) => {
  return (
    <Grid item>
      <Card style={{ maxWidth: 350, minWidth: 300 }}>
        <Link
          to={{
            pathname: `/teacher/classroom/${classroom.classRoomCode}`,
            state: classroom
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {subject}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Std:{standard}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='secondary' startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </CardActions>
        </Link>
      </Card>
    </Grid>
  )
}

export default ClassCard
