import { React, Component } from 'react';
import '../styles/globals.css';
import '../styles/productCard.css';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {

  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
