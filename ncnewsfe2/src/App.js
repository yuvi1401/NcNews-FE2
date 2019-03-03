import React, { Component } from 'react';
//import { Link, Router } from '@reach/router';
import './App.css';

import Login from './components/Login.jsx';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';

import * as api from './api';
import { navigate } from '@reach/router';

class App extends Component {
  state = {
    user: {},
    hasError: false
  };

  render() {
    const { user, hasError } = this.state;
    return (
      <div className="App">
        <h1> News App </h1>
        <Nav username={user.username} />
        {hasError ? (
          <h2>Can't load articles</h2>
        ) : (
          <Login login={this.setUser} user={user}>
            <Main user={user} />
          </Login>
        )}
      </div>
    );
  }

  setUser = username => {
    api
      .getUser(username)
      .then(username => this.setState({ user: username }))
      .catch(err => this.setState({ hasError: true }));
  };

  clearUser = () => {
    navigate('/');
    this.setState({ user: {} });
  };
}

export default App;
