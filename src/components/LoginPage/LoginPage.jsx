import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/search/search-action";
import "./LoginPage.css";

class LoginPage extends Component {
  state = {
    validUser: "fahad",
    validPassword: "fahad",
    userName: "",
    pwd: "",
    invalid: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    if (
      this.state.userName.toLowerCase() ===
        this.state.validUser.toLowerCase() &&
      this.state.pwd === this.state.validPassword
    ) {
      this.props.login();
      this.props.history.push({
        pathname: "/search",
        state: [this.state.userName],
      });
    } else {
      this.setState({ invalid: !this.state.invalid });
    }
  };
  render() {
    return (
      <form
        onSubmit={this.handleLogin}
        className="login-form"
      >
        <div className="login-container">
          <Link to="/" className="login-logo">
            <i className="fab fa-youtube "></i>
            <h1 className="login-header">YouTube</h1>
          </Link>
          <div className="user-name">
            <input
              onChange={this.handleChange}
              className="user-input"
              type="text"
              name="userName"
              placeholder="username"
            />
          </div>
          <div className="password">
            <input
              className="password-input"
              type="password"
              placeholder="password"
              name="pwd"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            onSubmit={this.handleLogin}
            className="login-btn"
          >
            Login
          </button>
          {this.state.invalid && <p className="invalid">Invalid Credential</p>}
        </div>
      </form>
    );
  }
}

export default connect(null, { login })(LoginPage);
