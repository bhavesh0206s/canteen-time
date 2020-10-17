import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import image from "../../assets/images/sign-up.png";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/auth";
import { Link, Redirect } from "react-router-dom";

function Signup({ match }) {
  let data;
  if (match.params.user === "student") {
    data = {
      name: "",
      email: "",
      password: "",
      standard: "",
      school: "",
    };
  } else {
    data = {
      name: "",
      email: "",
      password: "",
      qualification: "",
      specialization: "",
    };
  }
  const [formdata, setFormData] = useState(data);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const onChangeHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // if (password !== password2) {
    //   setAlert("Passwords do not match", "danger");
    // } else {
    if (match.params.user === "student") {
      dispatch(
        register({
          ...formdata,
          type: match.params.user,
        })
      );
    } else {
      dispatch(
        register({
          ...formdata,
          type: match.params.user,
        })
      );
    }
    console.log(formdata);
    // }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  } else if (match.params.user === "student") {
    return (
      <div>
        <Grid container alignItems="center" style={{ minHeight: "100vh" }}>
          <Grid item xs={12} sm={6} justify="center">
            <img
              src={image}
              style={{ width: "100%", objectFit: "cover" }}
              alt="cover image"
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems="center"
            direction="column"
            justify="space-between"
            style={{ padding: 10 }}
          >
            <div />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <form
                className="form"
                action="create-profile.html"
                onSubmit={(e) => onSubmitHandler(e)}
              >
                <TextField
                  label="Name"
                  margin="normal"
                  type="text"
                  name="name"
                  required
                  value={formdata.name}
                  onChange={(e) => onChangeHandler(e)}
                />
                <TextField
                  label="Password"
                  margin="normal"
                  type="password"
                  name="password"
                  minLength="6"
                  value={formdata.password}
                  onChange={(e) => onChangeHandler(e)}
                  required
                />
                <TextField
                  label="Standard"
                  margin="normal"
                  type="string"
                  name="standard"
                  required
                  value={formdata.standard}
                  onChange={(e) => onChangeHandler(e)}
                />
                <TextField
                  label="Email"
                  margin="normal"
                  type="email"
                  value={formdata.email}
                  onChange={(e) => onChangeHandler(e)}
                  name="email"
                  required
                />
                <TextField
                  label="School"
                  margin="normal"
                  type="text"
                  value={formdata.school}
                  onChange={(e) => onChangeHandler(e)}
                  name="school"
                  required
                />
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  value="Register"
                >
                  Signup
                </Button>
              </form>
              <div style={{ height: 20 }} />
              <div style={{ height: 20 }} />
              {/* <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("Login");
              }}
            >
              Or Login
            </Link> */}
              <Link to={`/${match.params.user}/login`}> Login </Link>
            </div>
            <div />
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Grid container alignItems="center" style={{ minHeight: "100vh" }}>
          <Grid item xs={12} sm={6} justify="center">
            <img
              src={image}
              style={{ width: "100%", objectFit: "cover" }}
              alt="cover image"
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems="center"
            direction="column"
            justify="space-between"
            style={{ padding: 10 }}
          >
            <div />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <form
                className="form"
                action="create-profile.html"
                onSubmit={(e) => onSubmitHandler(e)}
              >
                <TextField
                  label="Name"
                  margin="normal"
                  type="text"
                  name="name"
                  required
                  value={formdata.name}
                  onChange={(e) => onChangeHandler(e)}
                />
                <TextField
                  label="Password"
                  margin="normal"
                  type="password"
                  name="password"
                  minLength="6"
                  value={formdata.password}
                  onChange={(e) => onChangeHandler(e)}
                  required
                />
                <TextField
                  label="Qualification"
                  margin="normal"
                  type="text"
                  name="qualification"
                  required
                  value={formdata.qualification}
                  onChange={(e) => onChangeHandler(e)}
                />
                <TextField
                  label="Email"
                  margin="normal"
                  type="email"
                  value={formdata.email}
                  onChange={(e) => onChangeHandler(e)}
                  name="email"
                  required
                />
                <TextField
                  label="Specialization"
                  margin="normal"
                  type="text"
                  value={formdata.specialization}
                  onChange={(e) => onChangeHandler(e)}
                  name="specialization"
                  required
                />
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  value="Register"
                >
                  Signup
                </Button>
              </form>
              <div style={{ height: 20 }} />
              <div style={{ height: 20 }} />
              {/* <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("Login");
              }}
            >
              Or Login
            </Link> */}
              <Link to={`/${match.params.user}/login`}> Login </Link>
            </div>
            <div />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Signup;
