import styles from '../styles/Services.module.css';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ConvoyLogo, EnergySavvyLogo, MetaLogo, MicrosoftLogo, OlinLogo, OsmoLogo, SynapseLogo, USGBCLogo } from '../components/logos';

const Services = () => {
  return (<div>
    <h3 className={styles.title}> Software strategy for non-software founders</h3>
    <div className={styles.content}>
      <p>You$apos;re starting to incorporate software into your hardware-centric company, or ready to scale an existing prototype. What$apos;s a reasonable timeline? Is software always the long pole? When should you build vs buy vs outsource?</p>
      <p>We$apos;ll be your sounding board as you navigate scaling your software from 0 to 1, or from 1 to 100.</p>
    </div>

    <h3 className={styles.title}>Foundational software team building</h3>
    <div className={styles.content}>
      <p>You need to hire some software folks, but aren$apos;t sure how to identify the best candidates or compete with FAANG salaries.</p>
      <p>We$apos;ll help you get your first software team off the ground, from designing a hiring pipeline to developing a healthy and efficient team culture.</p>
      <p>Where we$apos;ve built teams:</p>
      <div className={styles.logos}>
        <EnergySavvyLogo />
        <OsmoLogo />
        <OlinLogo />
      </div>
    </div>

    <h3 className={styles.title}>Data pipelines & scientific model management</h3>
    <div className={styles.content}>
      <p>You$apos;ve got more data than you can handle. Your models, if you have them, take hours to run.</p>
      <p>We$apos;ll help make sure your scientists can iterate quickly without losing what you$apos;ve already learned. If you don$apos;t have a science team yet, we$apos;ll run your analysis or build your proof-of-concepts with clean code you can build on.</p>
      <p>Where we$apos;ve wrangled data:</p>
      <div className={styles.logos}>
        <MetaLogo />
        <EnergySavvyLogo />
        <OsmoLogo />
        <USGBCLogo />
      </div>

    </div>

    <h3 className={styles.title}>Full stack implementation</h3>
    <div className={styles.content}>
      <p>You$apos;re not ready to hire full-time software, or your existing employees are busy with mission-critical work.</p>
      <p>We$apos;ll get your first prototype built or tackle that side project that would accelerate your team or get more customers in the door.</p>
      <p>Where we$apos;ve delivered:</p>
      <p>Meta - Microsoft - Convoy - EnergySavvy - Osmo Systems - Qnuru - Synapse - Olin College</p>
      <div className={styles.logos}>
        <MetaLogo />
        <MicrosoftLogo />
        <ConvoyLogo />
        <EnergySavvyLogo />
        <OsmoLogo />
        <SynapseLogo />
      </div>
    </div>
  </div>)
  // return <ServicesList />
}

export default Services


type Service = {
  title: string;
  content?: string;
  bullets?: string[];
}

const Service = ({ service }: { service: Service }) => {
  return (
    <Accordion sx={{
      border: 0,
    }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h6'>{service.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p className={styles.content}>{service.content}</p>
          <ul>
            {(service.bullets || []).map((bullet) => {
              return <li key={service.title}>{bullet}</li>
            })}
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export const ServicesList = () => {
  return <div>{SERVICES.map((service) => <Service service={service} key={service.title}/>)}</div>
}

const SERVICES: Service[] = [
  {
    title: 'Fractional CTO / VP of Software Engineering',
    content: 'TBD',
  },
  {
    title: 'Foundational software team building',
    content: 'We\'ll help you get your first software team off the ground, from hiring to setting team culture',
    bullets: [
      'Who Hiring Method',
      'Psychological safety',
      'The Design Spike',
    ]
  },
  {
    title: '0-to-1 product strategy and implementation',
    content: 'Rapidly iterate to find product/market fit. Build the cheapest thing possible first (maybe it\'s a spreadsheet & a lot of manual phone calls behind the scenes). Don’t worry too much about technical debt yet - more on that later',
  },
  {
    title: '1-to-100+ product scaling',
    content: 'Scale your working prototype. Lay the foundation for future technological scale',
  },
  {
    title: 'Data pipeline design and and scientific model management',
    content: 'TBD',
  },
  {
    title: 'Software strategy coaching and education for non-software founders',
    content: 'TBD',
  }
]
