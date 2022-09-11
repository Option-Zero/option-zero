import styles from './services.module.css';
import React from 'react';
import { ConvoyLogo, EnergySavvyLogo, MetaLogo, MicrosoftLogo, OlinLogo, OsmoLogo, SynapseLogo, USGBCLogo } from '../components/logos';




const Services = () => {
  return (
    <ServicesList />
  )
}

export default Services

export const ServicesList = () => {
  return <div>{SERVICES.map((service, index) => <Service service={service} index={index} key={index} />)}</div >
}


const Service = ({ service, index }: { service: Service, index?: number }) => {
  return (
    <div>
      <h2>{service.title}</h2>
      <div className={styles.content}>
        <p><div className={styles.problemEmphasis}>{service.problemEmphasis}</div>{service.problem}</p>
        <p><b>Our solution: </b>{service.solution}</p>
        {service.logoText && <div className={styles.logosTitle}>{service.logoText}</div>}
        {service.logos && <div className={styles.logos}>{service.logos}</div>}
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



const SERVICES: Service[] = [
  {
    title: "Software strategy for non-software founders",
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

    title: "Data pipelines & scientific model management",
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
    title: "Foundational software team building",
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


