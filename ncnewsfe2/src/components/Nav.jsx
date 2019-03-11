import React, { Component } from 'react';
import { Link } from '@reach/router';

import './Nav.css';

class Nav extends Component {
  render() {
    const { topics, username, logOut } = this.props;

    //console.log('topics?', topics);
    //console.log(this.props);
    return (
      <div className="topNav">
        {username ? (
          <nav className="link">
            <button className="buttonNav">
              <Link to="/">Home</Link>
            </button>

            <button className="buttonNav">
              <Link to="/articles">Articles</Link>
            </button>

            <span className="dropdown">
              <button className="dropbtn">
                Topics
                <span className="dropdown-content">
                  {topics.map(topic => {
                    return (
                      <li key={topic.slug}>
                        <Link to={`/topics/${topic.slug}/articles`}>{`${
                          topic.slug
                        }`}</Link>
                      </li>
                    );
                  })}
                </span>
              </button>
            </span>

            <button className="buttonNav">
              <Link to="/post-topic">Add Topic</Link>
            </button>

            <button className="buttonNav">
              <Link to="/post-article">Add Article</Link>
            </button>

            <button onClick={logOut} className="buttonNav">
              Log Out
            </button>
          </nav>
        ) : (
          <h1 className="warning">Please Login</h1>
        )}
      </div>
    );
  }
}

export default Nav;
