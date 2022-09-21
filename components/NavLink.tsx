
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';


export default ({ href, title }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Link href={href}>
      <a className={currentRoute === href ? styles.active : styles.nonActive}>
        {title}
      </a>
    </Link>
  )
}