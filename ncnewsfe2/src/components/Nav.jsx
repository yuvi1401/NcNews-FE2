import React, { component } from 'react';
import { Link, Router } from '@reach/router';
import './Nav.css';

export const Nav = () => {
  return (
    <div className="topNav">
      <nav className="link">
        <Link to="/">Home</Link>
        {'  |  '}
        <Link to="/articles">Articles</Link>
        {'  |  '}
        <Link to="/topics">Add Topic</Link>
        {'  |  '}
        <Link to="/articles">Add Article</Link>
        {'  |  '}
        <Link to="/articles">Log Out</Link>
      </nav>
    </div>
  );
};
