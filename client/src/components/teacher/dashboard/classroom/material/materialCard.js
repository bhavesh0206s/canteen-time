import React from 'react'
import { Button, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    minWidth: 300
  }
})

const MaterialCard = props => {
  const classes = useStyles()
  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {props.fileName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Download
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

MaterialCard.defaultProps = {
  fileName: 'Study Material'
}

export default MaterialCard
