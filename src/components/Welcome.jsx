import React from 'react';

function Welcome({ isLoggedIn, userName }) {
  return (
    <div>
      {isLoggedIn ? <h1>Hello, {userName}</h1> : <h1>Hello, Guest!</h1>}
    </div>
  );
}

export default Welcome;
