import React from 'react';
//import './Error.css';

const Error = props => {
  const { goHome } = props;
  return (
    <main className="content-well">
      <h1 className="title title--404">404</h1>
      <h2>Something went wrong!</h2>
      <p>Please goto HomePage!!</p>
      <button onClick={goHome} className="button">
        Go Home
      </button>
    </main>
  );
};

export default Error;
