import { Button } from "@material-ui/core";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>JOIN AS</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <Link to="/teacher/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Button color='primary' variant='contained'>
              Teacher
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/student/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
           <Button color='primary' variant='contained'>
              Student
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/parent/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Button color='primary' variant='contained'>
              Parent
            </Button>
          </Link>
        </div>
      </div>
      <div style={{marginTop: 200,textAlign: 'center', background: 'linear-gradient(to right, #485563, #29323c)'}}>
        <h1 style={{fontSize: 70, color: 'white', margin: 0}}>
          WELCOME TO CANTEEN
        </h1>
        <h4 style={{color: 'white', fontWeight: 500, paddingBottom: 10}}>
          Powering Today's Education
        </h4>
      </div>
    </Fragment>
  );
};

export default Landing;