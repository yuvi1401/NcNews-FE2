import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
  state = { username: 'grumpy19' };

  render() {
    const { user, children } = this.props;

    const { username } = this.state;
    if (user.username) return children;
    return (
      <div className="auth">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h2>Please Login to your account</h2>

          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.handleChange}
            required
          />
          <button id="button" type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;

    const { login } = this.props;

    login(username);
  };

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  };
}

export default Login;
