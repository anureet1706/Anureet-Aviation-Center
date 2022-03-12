import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "./routes";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const LoginStyles = styled.div`
  margin: 10px 10px;

  .login-title {
      font-size: 30px;
      font-weight: bold;
  };

  .center {
    text-align: center;
  };

  .login-button {
    margin-bottom: 10px;
  };

    .back-img {
      background-repeat: no-repeat;
      background-size: cover;
      position: fixed;
      left: 0;
      right: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #cccccc;
    }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <LoginStyles>
          <Grid container spacing={2} className="back-img">

            <Grid item xs={12}>
            <Grid container spacing={2}>
            <Grid item xs={12} className="center">
              <h2 className="login-title">Welcome Back</h2>
            </Grid>

            <Grid item xs={12} className="center">
              <TextField
                id="email"
                variant="outlined"
                label="Email Address"
                value={this.state.email}
                onChange={(e) => this.onEmailChange(e)}
              />
            </Grid>

            <Grid item xs={12} className="center">
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                value={this.state.password}
                onChange={(e) => this.onPasswordChange(e)}
              />
            </Grid>

            <Grid item xs={12} className="center">
              <Button
                component={Link}
                to={ROUTE.DASHBOARD}
                variant="contained"
                className="login-button"
                disabled={
                  (this.state.email.length > 0 && this.state.password.length > 0)
                    ? false
                    : true
                }
              >
                Sign In
              </Button>
            </Grid>
              </Grid>
            </Grid>
            
          </Grid>
 
      </LoginStyles>
    );
  }

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
}

export default Login;
