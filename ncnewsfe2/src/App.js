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
    topics: [],
    isLoading: false,
    hasError: false
  };

  render() {
    const { user, topics, isLoading, hasError } = this.state;
    if (isLoading) return <h3>Loading...</h3>;
    return (
      <div className="App">
        <h1> News App </h1>

        <Nav username={user.username} topics={topics} logOut={this.logOut} />
        {hasError ? (
          <h2>Can't load articles</h2>
        ) : (
          <Login login={this.setUser} user={user}>
            <Main user={user} topics={topics} />
          </Login>
        )}
      </div>
    );
  }

  setUser = username => {
    api
      .getUser(username)
      .then(username => this.setState({ user: username }))
      .then(localStorage.setItem('user', JSON.stringify(this.state.user)))
      .catch(err => this.setState({ hasError: true }));
  };

  // clearUser = () => {
  //   navigate('/');
  //   this.setState({ user: {} });
  // };
  logOut = () => {
    navigate('/');
    this.setState({ user: {} });
    localStorage.clear();
  };

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({
        topics: topics,
        isLoading: false
      });
    });
  }
}

export default App;
