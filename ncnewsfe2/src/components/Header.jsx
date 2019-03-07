import React from 'react';
import './Header.css';
const Header = props => {
  const { username } = this.props;
  return (
    <div>
      <h1> News App </h1>
      <h3>Welcome {`${username}`}</h3>
    </div>
  );
};
export default Header;
