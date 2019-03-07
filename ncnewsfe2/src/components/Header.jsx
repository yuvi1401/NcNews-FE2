import React from 'react';
import './Header.css';
const Header = props => {
  const { username } = props;
  return (
    <div className="topBar">
      <h1> News App </h1>
      <h3>Welcome {`${username}`}</h3>
    </div>
  );
};
export default Header;
