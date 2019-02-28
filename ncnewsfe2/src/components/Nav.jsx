import React, { Component } from 'react';
import { Link, Router } from '@reach/router';
import './Nav.css';

class Nav extends Component {
  render() {
    const { username } = this.props;
    console.log(username);
    return (
      <div className="topNav">
        {username ? (
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
        ) : (
          <h1 className="warning">Please Login</h1>
        )}
      </div>
    );
  }
}
// export const Nav = () => {
//   return (
// <div className="topNav">

//   <nav className="link">
//     <Link to="/">Home</Link>
//     {'  |  '}
//     <Link to="/articles">Articles</Link>
//     {'  |  '}
//     <Link to="/topics">Add Topic</Link>
//     {'  |  '}
//     <Link to="/articles">Add Article</Link>
//     {'  |  '}
//     <Link to="/articles">Log Out</Link>
//   </nav>
// </div>
//   );
// };

export default Nav;
