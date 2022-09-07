import styles from '../styles/Services.module.css';

const Services = () => {
  return <ServicesList />
}

export default Services


type Service = {
  title: string;
  content?: string;
}

const Service = ({ service }: { service: Service }) => {
  return (
    <div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.content}>{service.content || LOREM_IPSUM}</p>
    </div>
  )
}

export const ServicesList = () => {
  return <div>{SERVICES.map((service) => <Service service={service} />)}</div>
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
