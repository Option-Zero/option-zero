import Image from 'next/image';
import React from 'react';

import styles from './Navbar.module.css';

const OptionZeroLogo = () => <div className={styles.logo}><Image alt="Option Zero logo" src='/logo.svg' layout='fixed' width='100' height='40' /></div>

export const TopBar = () => {
  return (
    <div className={styles.topbarContainer} >
      <div className={styles.topbar}>
        <OptionZeroLogo />
      </div>
    </div>
  )
}