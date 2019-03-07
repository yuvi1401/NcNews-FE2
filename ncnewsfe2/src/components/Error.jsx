import React from 'react';
import './Error.css';

const Error = props => {
  const { goHome } = props;
  return (
    <main className="contentWell">
      <h2>ERROR- 404 !!!</h2>
      <h2>Something went wrong!</h2>
      <p>Please goto HomePage!!</p>
      <button onClick={goHome} className="button">
        Go Home
      </button>
    </main>
  );
};

export default Error;
