// import { useAuth0 } from "@auth0/auth0-react";
// import React from "react";

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {

  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  function handleLogin() {
    loginWithRedirect();
  }

  return ! isAuthenticated &&
    <button onClick={handleLogin}>Log in</button>
  ;
}
export default Login;