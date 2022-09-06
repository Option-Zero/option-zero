import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link href="https://fonts.googleapis.com/css2?family=IBM Plex Sans" rel="stylesheet"></link>
      </Head>

      <div className={styles.sidebar}>
        <Image src='/logo.svg' width='100' height='40' />
        <nav>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <main className={styles.main}>
        Main content
      </main>
    </div>
  );
}
