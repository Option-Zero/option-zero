import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';


type Service = {
  title: string;
  content?: string;
}

const SERVICES: Service[] = [
  {
    title: 'Fractional CTO / VP of Software Engineering',
  },
  {
    title: 'Foundational software team building',
  },
  {
    title: '0-to-1 product strategy and implementation',
  },
  {
    title: '1-to-100+ product scaling',
  },
  {
    title: 'Data pipeline design and and scientific model management',
  },
  {
    title: 'Software strategy coaching and education for non-software founders',
  }
]

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const Service = ({ service }: { service: Service }) => {
  return (
    <div>
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceContent}>{service.content || LOREM_IPSUM}</p>
    </div>
  )
}

const ServicesList = () => {
  return <div>{SERVICES.map((service) => <Service service={service} />)}</div>
}


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link href="https://fonts.googleapis.com/css2?family=IBM Plex Sans" rel="stylesheet"></link>
      </Head>

      <div className={styles.sidebar}>
        <Image src='/logo.svg' layout='fixed' width='100' height='40' />
        <nav>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <main className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <ServicesList />
        </div>
      </main>
    </div>
  );
}
