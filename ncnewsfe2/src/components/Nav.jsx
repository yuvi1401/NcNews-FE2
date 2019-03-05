import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getTopics } from '../api';
//import Topics from './Topics.jsx';
import './Nav.css';

class Nav extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  render() {
    const { topics, isLoading } = this.state;
    const { username } = this.props;
    if (isLoading) return <h3>Loading...</h3>;
    //console.log('topics?', topics);
    console.log(username);
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
            <Link to="/topics">Add Topic</Link>
            {'  |  '}
            <Link to="/post-article" state={{ topics }}>
              Add Article
            </Link>
            {'  |  '}
            <Link to="/articles">Log Out</Link>
          </nav>
        ) : (
          <h1 className="warning">Please Login</h1>
        )}
      </div>
    );
  }
  componentDidMount() {
    getTopics().then(topics => {
      this.setState({
        topics: topics,
        isLoading: false
      });
    });
  }
}

export default Nav;
