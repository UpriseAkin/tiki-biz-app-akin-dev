import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Head from 'next/head'
import login from './api/login';
import styles from '../styles/Home.module.css'

export default async function Home() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    // console.log(user) // debug
    // let db_response;
    // await login();
    // db_response = login();
    // console.log(db_response);
    return (
      <div>
        Hello {user.name}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}
