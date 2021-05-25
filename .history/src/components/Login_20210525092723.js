import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = () => {
  const responseGoogle = (response) => {

  }
  return (
    <div>
    <GoogleLogin
      clientId="652150268889-1ropi2okc0kble20c913qi5lk88krb4t.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  </div>
  )

}