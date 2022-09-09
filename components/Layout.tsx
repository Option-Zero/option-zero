import Head from 'next/head';
import React from 'react';

import styles from './Layout.module.css';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Option Zero</title>
        <link href="https://fonts.googleapis.com/css2?family=IBM Plex Sans" rel="stylesheet"></link>
        <link rel="stylesheet" type="text/css" href="/FuturaFuturis.css"></link>
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