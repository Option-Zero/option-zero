import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

import styles from './Navbar.module.css';

const OptionZeroLogo = () => <div className={styles.logo}><Image alt="Option Zero logo" src='/logo.svg' layout='fixed' width='100' height='40' /></div>

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <OptionZeroLogo />
      <nav>
        <Link href="/team"><a>Team</a></Link>
        <Link href="/services"><a>Services</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </nav>
    </div>
  )
}


export const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <OptionZeroLogo />
      <div className={styles.menu}><AiOutlineMenu size={25} /></div>
    </div>
  )
}