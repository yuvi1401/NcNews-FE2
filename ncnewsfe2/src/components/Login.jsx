import React, { Component } from 'react';
//import Users from './Users';
import './Login.css';

class Login extends Component {
  state = { username: 'grumpy19' };

  render() {
    const { user, children } = this.props;
    //console.log(this.props);
    const { username } = this.state;
    if (user.username) return children;
    return (
      <div className="auth">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h2>Please Login to your account</h2>
          {/* <label for="username">Username:</label> */}
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
        {/* <Users isLinked={false} /> */}
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    //console.log(username);
    const { login } = this.props;
    // console.log(this.props);
    login(username);
  };

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
    // console.log(this.state.username);
  };
}

export default Login;
