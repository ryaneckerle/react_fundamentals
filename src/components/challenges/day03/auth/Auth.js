import { useState } from 'react';
import Signup from './Signup/Signup';
import Login from './Login/Login';

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  function handleToggle() {
    setShowLogin(!showLogin);
  }

  return (
    <div>
      <h2>Hellow form Auth</h2>
      {showLogin ? <Login /> : <Signup />}
      <button onClick={handleToggle}>Click to Toggle</button>
    </div>
  );
};

export default Auth;
