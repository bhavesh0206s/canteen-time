import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Add from '@material-ui/icons/Add';
import AddClassDropDown from './addSubDropDown';
const AddSub = props => {
  const [openAddSub, setOpenAddSub] = useState(false);
  const handleToggle = () => {
    setOpenAddSub(!openAddSub);
  };
  return (
    <Grid item>
      <Card style={{ maxWidth: 350, minWidth: 300 }}>
        <CardActionArea onClick={handleToggle}>
          <AddCircleIcon
            color='primary'
            style={{
              fontSize: 'large',
              width: 90,
              height: 90,
              marginLeft: '35%'
            }}
          />
        </CardActionArea>
        <CardActions>
          <Button onClick={handleToggle} size='small' color='primary' startIcon={<Add />}>
            Join classroom
          </Button>
        </CardActions>
      </Card>
      <AddClassDropDown handleToggle={handleToggle} openAddSub={openAddSub} />
    </Grid>
  )
}

export default AddSub
