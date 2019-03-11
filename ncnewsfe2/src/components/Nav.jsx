import React, { Component } from 'react';
import { Link } from '@reach/router';

import './Nav.css';

class Nav extends Component {
  render() {
    const { topics, username, logOut } = this.props;

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
              <button className="dropbtn" id="button-drop">
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
              <Link to="/post-topic/new">Add Topic</Link>
            </button>

            <button className="buttonNav">
              <Link to="/post-article/new">Add Article</Link>
            </button>

            <button onClick={logOut} className="buttonNav" id="button-logout">
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
