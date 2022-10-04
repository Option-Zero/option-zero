import styles from './index.module.css';
import React from 'react';
import { ConvoyLogo, EnergySavvyLogo, MetaLogo, MicrosoftLogo, OlinLogo, OsmoLogo, SynapseLogo, USGBCLogo } from '../components/logos';




const Services = () => {
  return (
    <>
      <div className={styles.headlineContainer}>
        <h1 className={styles.tagline}>Modern software for climate tech</h1>
        <p className={styles.taglineExtra}>We do software strategy, implementation, data foundations, and team-building for companies making a difference on climate change</p>
        <a href="https://forms.gle/U4v2ZqNLzYdDbZPE6" target="_blank" rel="noreferrer"><button className={styles.ctaButton}>Work With Us</button></a>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>{"Services"}</div>
        <ServicesList />
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>{"Where we've delivered"}</div>
        <div className={styles.logos}>
          <MetaLogo />
          <MicrosoftLogo />
          <ConvoyLogo />
          <EnergySavvyLogo />
          <OsmoLogo />
          <SynapseLogo />
          <OlinLogo />
          <USGBCLogo />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>{"About"}</div>
        <p>We’re <a href="https://www.linkedin.com/in/jaimemarijke/" target="_blank" rel="noreferrer">Jaime</a> and <a href="https://www.linkedin.com/in/thejasoncurtis/" target="_blank" rel="noreferrer">Jason Curtis</a>, a husband and wife team. We’ve built on our combined 20+ years of experience in software and climate solutions to launch Option Zero, the software consultancy for climate companies & initiatives.</p>
        <p>If your mission is climate resilience, your mission is our mission.</p>
        <p>Contact us at <a href="mailto:team@optionzero.co" target="_blank" rel="noreferrer">team@optionzero.co</a></p>
      </div>
    </>
  )
}

export default Services

export const ServicesList = () => {
  return <div>{SERVICES.map((service, index) => <Service service={service} index={index} key={index} />)}</div>
}


const Service = ({ service, index }: { service: Service, index?: number }) => {
  return (
    <div id={`service-${index}`} className={styles.service}>
      <div className={styles.serviceTitle}>
        <h2>{index}. {service.title}</h2>
      </div>
      <div className={styles.content}>
        {/* <p>{service.problemEmphasis}{service.problem}</p> */}
        <p>{service.solution}</p>
      </div>
    </div>
  )
}


type Service = {
  title: string;
  problemEmphasis?: string;
  problem?: string;
  solution?: string;
  logoText?: string;
  logos?: any;
}



export const SERVICES: Service[] = [
  {
    title: "Software strategy",
    problemEmphasis: "You’re starting to incorporate software ",
    problem: "into your hardware-centric company, or ready to scale an existing prototype. What’s a reasonable timeline? Is software always the long pole? When should you build vs buy vs outsource?",
    solution: "We’ll help you navigate scaling your software from 0 to 1 or from 1 to 100.",
    logoText: "Where we've strategized",
    logos: (
      <>
        <EnergySavvyLogo />
        <OsmoLogo />
        <OlinLogo />
        {/* <div>[Uprope]</div> */}
      </>
    )
  },
  {

    title: "Full stack implementation",
    problemEmphasis: "You’re not ready to hire full-time software, ",
    problem: "or your existing employees are busy with mission-critical work.",
    solution: "We’ll get your first prototype built or tackle that side project that would accelerate your team or get more customers in the door.",
    logoText: "Where we've delivered product",
    logos: (
      <>
        <MetaLogo />
        <MicrosoftLogo />
        <ConvoyLogo />
        <EnergySavvyLogo />
        <OsmoLogo />
        <SynapseLogo />
      </>
    )
  },
  {

    title: "Data foundations",
    problemEmphasis: "You’ve got more data than you can handle. ",
    problem: "Your models take hours to run.",
    solution: "We’ll ensure your scientists can iterate quickly without losing what you’ve already learned. If you don’t have a science team yet, we’ll run your analysis or develop your proof-of-concepts with clean code you can build on.",
    logoText: "Where we've wrangled data",
    logos: (
      <>
        <EnergySavvyLogo />
        <MetaLogo />
        <OsmoLogo />
        <USGBCLogo />
      </>
    )
  },
  {
    title: "Software team building",
    problemEmphasis: "You need to hire some software folks, ",
    problem: "but aren’t sure how to identify the best candidates or compete with FAANG salaries.",
    solution: "We'll help you get your first software team off the ground, from designing a hiring pipeline to developing a healthy and efficient team culture.",
    logoText: "Where we've built teams",
    logos: (
      <>
        <EnergySavvyLogo />
        <OsmoLogo />
        <OlinLogo />
      </>
    )
  },
]


