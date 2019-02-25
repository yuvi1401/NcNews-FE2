import React, { Component } from 'react';
import { Link, Router } from '@reach/router';
import './App.css';

import Login from './components/Login.jsx';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import Articles from './components/Articles';
import Article from './components/Article';

import * as api from './api';
import { navigate } from '@reach/router';

class App extends Component {
  state = {
    user: {},
    hasError: false
  };

  // componentDidMount() {
  //   const userString = localStorage.getItem('user');
  //   if (userString) {
  //     const localUser = JSON.parse(userString);
  //     this.setState({ user: localUser });
  //   }
  // }

  render() {
    const { user, hasError } = this.state;
    return (
      <div className="App">
        <h1> News App </h1>
        <Nav user={user} />
        {hasError ? (
          <h2>Can't load articles</h2>
        ) : (
          <Login login={this.setUser} user={user}>
            <Main user={user} />
          </Login>
        )}

        {/* <Router>
          <Articles path="/articles" />
          <Article path="/articles/:article_id" />
        </Router> */}
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
// const Home = () => <div />;
// const Articles = () => <div />;

export default App;
