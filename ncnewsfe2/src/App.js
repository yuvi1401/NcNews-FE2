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
          <h2>
            <div>
              Can't load articles... Possible Reasons: Incorrect Username/
              Network Error. Try to Login Again.
            </div>
            {/* <div>
              <button onClick={this.goHome} className="button">
                HOME
              </button>
            </div> */}
          </h2>
        ) : (
          <Login login={this.setUser} user={user}>
            <Main user={user} topics={topics} goHome={this.goHome} />
          </Login>
        )}
      </div>
    );
  }

  componentDidUpdate(prevState) {
    if (prevState.user !== this.state.user) {
      localStorage.setItem('user', JSON.stringify(this.state.user));
    }
  }

  setUser = username => {
    api
      .getUser(username)
      .then(username => {
        console.log(username);
        this.setState({ user: username });
      })
      .catch(err => this.setState({ hasError: true }));
  };

  logOut = () => {
    navigate('/');
    this.setState({ user: {} });
    localStorage.clear();
  };

  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user && !user.username) {
      this.setState({ user: JSON.parse(localStorage.getItem('user')) });
    }
    api.getTopics().then(topics => {
      this.setState({
        topics: topics,
        isLoading: false
      });
    });
  }
  goHome = () => {
    navigate('/');
  };
}

export default App;
