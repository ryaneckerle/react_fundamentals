import './App.css';
import React from 'react';
import Auth from './components/challenges/day03/auth/Auth';

// this is a root component
// parent function
function App() {
  // JS above return statement can be injected into JSX using {}
  // const name = 'Ryan';

  return (
    <div>
      <Auth />
    </div>
  );
}

export default App;
