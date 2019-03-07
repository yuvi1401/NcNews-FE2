import React from 'react';
import './Home.css';

const Home = props => {
  const { username } = props;
  //console.log(this.props);

  return (
    <div className="container">
      <div className="grid-row">
        <h1>Welcome to NC News </h1>

        <h2>{`${username}`} </h2>
      </div>
    </div>
  );
};

export default Home;
