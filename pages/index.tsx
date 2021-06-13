import Head from 'next/head';
import React from 'react';
import { Main } from '../screens';

const demoProps = {
  user: {},
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
}

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  )
}
