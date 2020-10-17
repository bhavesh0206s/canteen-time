import React from 'react'
<<<<<<< HEAD
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import DashBoard from '../teacher/dashboard/DashBoard'
import AnnounceCard from '../teacher/announcement/announceCard'
import Header from './appBar'
import { Link } from 'react-router-dom'
import Forum from '../forum/forum'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}))

export default function NavBar () {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Header title='Canteen' />
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Dashboard' {...a11yProps(0)} />
          <Link to='/forum' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Tab label='Forum' {...a11yProps(1)} />
          </Link>
          <Tab label='Announcments' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DashBoard />
      </TabPanel>
      <TabPanel value={value} index={1}>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Yaha announcment ka loop/map banana hai */}

        <AnnounceCard
          subject='ADC'
          announcment='Idhar announcmnet ayega...............'
          teacher='Sarosh'
        />
        <AnnounceCard
          subject='ADC'
          announcment='Idhar announcmnet ayega...............'
          teacher='Sarosh'
        />
        <AnnounceCard
          subject='ADC'
          announcment='Idhar announcmnet ayega...............'
          teacher='Sarosh'
        />
        <AnnounceCard
          subject='ADC'
          announcment='Idhar announcmnet ayega...............'
          teacher='Sarosh'
        />
      </TabPanel>
    </div>
  )
}
=======
import { AppBar, Button, Container, Toolbar } from '@material-ui/core'
const NavBar = () => {
  return (
    <Container>
      <AppBar>
        <Toolbar>
          {/* Link dashboard and forum buttons to their respective pages and add function to Log-out button */}

          <Button color='inherit'>Dashboad</Button>
          <Button color='inherit'>Forum</Button>
          <Button color='inherit'>Log-out</Button>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default NavBar
>>>>>>> ccf7a38741a11a984eb6591f63a1fda607b46f67
