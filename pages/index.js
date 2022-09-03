import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Option Zero</h1>

        <p className={styles.description}>climate tech consultancy</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Engineering Power Couple</h3>
            <p>
              20 years of combined software, program management and team
              management experience
            </p>
            <ul>
              <li>Strategy</li>
              <li>Team building best practices</li>
              <li>Full Stack Software</li>
              <li>Machine Learning</li>
              <li>Embedded Prototyping</li>
              <li>Team Building & best practices</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Sustainability Experts</h3>
            <ul>
              <li>Data anlysis</li>
              <li>Lifecycle Analysis</li>
              <li>Uhhh something else?</li>
            </ul>
          </div>

          <a href="mailto:team@jteam.co" className={styles.card}>
            <h3>Contact us &rarr;</h3>
            <p>team@jteam.co</p>
          </a>
        </div>
      </main>
    </div>
  );
}
