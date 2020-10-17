import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Join As</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Link to="/teacher/login">Teacher</Link>
        </div>
        <div>
          <Link to="/student/login">Student</Link>
        </div>
        <div>
          <Link to="/parent/login">Parent</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
