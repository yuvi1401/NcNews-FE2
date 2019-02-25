import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() {
    const { username } = this.props;
    console.log(this.props);

    return (
      <div className="homepage">
        <h3>Welcome to NC News {`${username}`} </h3>
      </div>
    );
  }
}

export default Home;
