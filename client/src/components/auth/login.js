import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import image from "../../assets/images/login.png";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

function Login({ match }) {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formdata;

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const onChangeHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password, match.params.user));
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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
                label="Email"
                margin="normal"
                type="email"
                value={email}
                onChange={(e) => onChangeHandler(e)}
                name="email"
                required
              />
              <TextField
                label="Password"
                margin="normal"
                type="password"
                name="password"
                minLength="6"
                value={password}
                onChange={(e) => onChangeHandler(e)}
                required
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                value="Register"
              >
                Login
              </Button>
            </form>
            <div style={{ height: 20 }} />
            <Link to={`/${match.params.user}/register`}> Signup </Link>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
