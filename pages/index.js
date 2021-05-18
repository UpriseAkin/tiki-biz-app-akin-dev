import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
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
    // debug
    console.log(user)
    return (
      <div>
        Hello {user.name}{' '}
        <br/>
        email:  {user.email}
        <br/>
        user_id:  {user.user_id}
        <br/> 
        user_id: {user.identities[0].user_id}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}
