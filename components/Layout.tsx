import Head from 'next/head';
import React from 'react';

import styles from './Layout.module.css';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Option Zero</title>
        <link href="https://fonts.googleapis.com/css?family=IBM Plex Sans:200,300,500,600,900" rel="stylesheet" type="text/css"></link>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata:900" rel="stylesheet" type="text/css"></link>
        <link rel="stylesheet" type="text/css" href="/FuturaFuturis.css"></link>
        <link rel="shortcut icon" href="/favicon.png"></link>
      </Head>
      <div className={styles.sidebar}>
        <Navbar />
      </div>
      <main className={styles.mainContainer}>
        <div className={styles.mainContent}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout;