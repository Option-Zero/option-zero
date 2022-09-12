import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import styles from './Navbar.module.css';

const OptionZeroLogo = () => <div className={styles.logo}><Image alt="Option Zero logo" src='/logo.svg' layout='fixed' width='100' height='40' /></div>

const Nav = () => {
  return (
    <nav>
      <Link href="/team"><a>Team</a></Link>
      <Link href="/services"><a>Services</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </nav>
  )
}

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <OptionZeroLogo />
      <Nav />
    </div>
  )
}


export const TopBar = () => {
  const [showNavDrawer, setShow] = useState(false);

  return (
    <div className={styles.topbarContainer} >
      <div className={styles.topbar}>
        <OptionZeroLogo />
        {!showNavDrawer && <div className={styles.menuButton} onClick={() => setShow(true)}><AiOutlineMenu size={25} /></div>}
        {showNavDrawer && <div className={styles.menuButton} onClick={() => setShow(false)}><AiOutlineClose size={25} /></div>}
      </div>
      {showNavDrawer && <div className={styles.navDrawer} onClick={() => setShow(!showNavDrawer)}>
        <Nav />
      </div>}
    </div>
  )
}