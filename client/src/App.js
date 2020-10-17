import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Header from "./components/common/appBar";
import Forum from "./components/forum/forum";
import SelectedTopicDetails from "./components/forum/selectedTopicDetails";
import TopicDetails from "./components/forum/topicDetails";
import DashBoard from "./components/student/dashboard/DashBoard";
import NavBar from './components/common/navBar'
function App() {
  return (
    // <div>Helo bhai log kaise ho</div>
    <Router>
      <Fragment>
        {/* <Navbar /> */}
        {/* <Route exact path="/" component={Landing} /> */}
        {/* <section className="container"> */}
        {/* <Alert /> */}
        <Route exact path='/' component={DashBoard} />
        <Switch>
          <Route exact path='/' component={NavBar} />
          <Route  exact path="/forum" component={Forum} />

          {/* <Route exact path="/forum/:topics" component={TopicDetails} /> */}
          {/* <Route
            exact
            path="/forum/:topics/:id"
            component={SelectedTopicDetails}
          />
          <Route exact path="/login" component={Login} /> */}
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
      {/* <Login/> */}
    </Router>
  )
}
export default App;
