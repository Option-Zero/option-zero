import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.sidebar}>
      <Image alt="Option Zero logo" src='/logo.svg' layout='fixed' width='100' height='40' />
      <nav>
        <Link href="/team"><a>Team</a></Link>
        <Link href="/services"><a>Services</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </nav>
    </div>
  )
}

export default Navbar;