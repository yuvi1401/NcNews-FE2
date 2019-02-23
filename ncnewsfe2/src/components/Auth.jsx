import React, { Component } from 'react';
import './Auth.css';

class Auth extends Component {
  state = {
    user: {}
  };
  render() {
    return this.props.user ? (
      <div>{this.props.children}</div>
    ) : (
      <div className="main">
        <form className="login-form">
          <h2>Please Login to your account</h2>

          <input
            id="username"
            placeholder="Enter username"
            onChange={this.handleChange}
            required
          />
          <button id="button" type="submit" onClick={this.handleSubmit}>
            Log in
          </button>
          <p>Please use grumpy19 for testing</p>
        </form>
      </div>
    );
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ user: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { login } = this.props;
    const { user } = this.state;
    this.setState({ user });
    login(user);
  };
}

export default Auth;
