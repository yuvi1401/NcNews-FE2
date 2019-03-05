import React, { Component } from 'react';
import { Link } from '@reach/router';

import './Nav.css';

class Nav extends Component {
  render() {
    //const { topics, isLoading } = this.state;
    const { topics, username } = this.props;
    //if (isLoading) return <h3>Loading...</h3>;
    //console.log('topics?', topics);
    console.log(this.props);
    return (
      <div className="topNav">
        {username ? (
          <nav className="link">
            <Link to="/">Home</Link>
            {'  |  '}
            <Link to="/articles">Articles</Link>
            {'  |  '}

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
            {'  |  '}
            <Link to="/post-topic">Add Topic</Link>
            {'  |  '}
            <Link to="/post-article">Add Article</Link>
            {'  |  '}
            <Link to="/">Log Out</Link>
          </nav>
        ) : (
          <h1 className="warning">Please Login</h1>
        )}
      </div>
    );
  }
}

export default Nav;
