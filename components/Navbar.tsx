import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.sidebar}>
      <Image src='/logo.svg' layout='fixed' width='100' height='40' />
      <nav>
        <Link href="/services"><a>Services</a></Link>
        <Link href="/about"><a>Team</a></Link>
        <Link href="mailto:team@optionzero.io"><a>Contact</a></Link>
      </nav>
    </div>
  )
}

export default Navbar;