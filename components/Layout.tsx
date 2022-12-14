import Head from 'next/head';
import React from 'react';

import styles from './Layout.module.css';
import { TopBar } from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Option Zero: Software Consultancy for Climate Companies</title>
        <link rel="shortcut icon" href="/favicon.png"></link>
      </Head>
      <div className={styles.topbar}>
        <TopBar />
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