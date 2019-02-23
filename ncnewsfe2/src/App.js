import React, { Component } from 'react';
import { Link, Router } from '@reach/router';
import './App.css';

import { Nav } from './components/Nav.jsx';
import Auth from './components/Auth';
import Articles from './components/Articles';
import Article from './components/Article';

class App extends Component {
  state = {
    user: null
  };

  render() {
    return (
      <div className="App">
        <h1> News App </h1>
        <Nav />
        <Auth>
          login={this.setUser}
          logout={this.clearUser}
          user={this.state.user}
        </Auth>
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <Article path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
}
const Home = () => <div />;
// const Articles = () => <div />;

export default App;
