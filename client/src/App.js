import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Header from './components/common/header'
import Forum from './components/forum/forum'
// import DashBoard from "./components/student/dashboard/DashBoard";
import DashBoard from './components/student/dashboard/DashBoard'
import AnnouncementStudent from './components/student/announcement/announcment'
import AnnouncementTeacher from './components/teacher/announcement/announcement'
import Landing from './components/common/Landing'
import DashBoardStudent from './components/student/dashboard/DashBoard'
import DashBoardTeacher from './components/teacher/dashboard/DashBoard'
import MaterialPage from './components/teacher/dashboard/classroom/material/materialPage'
import SubPage from './components/student/dashboard/subject/subPage'
// import DashBoardStudent from './components/student/dashboard/DashBoard'

function App () {
  return (
    // <div>Helo bhai log kaise ho</div>
    <Router>
      <Fragment>
        {/* <Navbar /> */}
        <Route exact path='/' component={Landing} />
        {/* <section className="container"> */}
        {/* <Alert /> */}
        <Switch>
          <Route exact path='/:user/register' component={Signup} />
          <Route exact path='/:user/login' component={Login} />
          {/* <Route exact path="/dashboard" component={DashBoard} /> */}
          <Route exact path='/student/dashboard' component={DashBoardStudent} />
          <Route exact path='/teacher/dashboard' component={DashBoardTeacher} />
          <Route
            exact
            path='/teacher/classroom/:classroomcode'
            component={MaterialPage}
          />
          <Route
            exact
            path='/student/classroom/:classroomcode'
            component={SubPage}
          />
          <Route
            exact
            path='/student/classroom/:classroomcode'
            component={DashBoardTeacher}
          />
          <Route
            exact
            path='/student/announcement'
            component={AnnouncementStudent}
          />
          <Route
            exact
            path='/teacher/announcement'
            component={AnnouncementTeacher}
          />

          <Route path='/forum' component={Forum} />
          {/* <Route exact path="/profiles" component={Profiles} /> */}
          {/* <Route exact path="/profile/:id" component={Profile} /> */}
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={ProfileForm}
            /> */}
        </Switch>
        {/* </section> */}
      </Fragment>
    </Router>
  )
}

export default App
