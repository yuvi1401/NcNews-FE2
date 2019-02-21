import React, { Component } from 'react';
import { Link, Router } from '@reach/router';
import './App.css';

import { Nav } from './components/Nav.jsx';
import Articles from './components/Articles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> News App </h1>
        <Nav />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
        </Router>
      </div>
    );
  }
}
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
// const Articles = () => <div />;

export default App;
