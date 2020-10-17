import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Landing from "./components/common/Landing";
import Header from "./components/common/header";
import Forum from "./components/forum/forum";
import SelectedTopicDetails from "./components/forum/selectedTopicDetails";
import TopicDetails from "./components/forum/topicDetails";
import DashBoard from "./components/student/dashboard/DashBoard";
import NavBar from "./components/common/navBar";
import Announcement from "./components/student/announcement/announcment";

function App() {
  return (
    // <div>Helo bhai log kaise ho</div>
    <Router>
      <Fragment>
        {/* <Navbar /> */}
        {/* <Route exact path="/" component={Landing} /> */}
        {/* <section className="container"> */}
        {/* <Alert /> */}
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/:user/register" component={Signup} />
          <Route exact path="/:user/login" component={Login} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/announcement" component={Announcement} />
          <Route exact path="/forums" component={Forum} />
          <Route exact path="/forums/:topics" component={TopicDetails} />
          <Route
            exact
            path="/forums/:topics/:id"
            component={SelectedTopicDetails}
          />
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
  );
}

export default App;
