import Image from 'next/future/image';
import styles from './team.module.css';

const Team = () => {
  return (
    <div className={styles.content}>
      <Image alt="team" src='/team.png' width="0" height="0" sizes="100vw" style={{ width: '300px', height: '100%' }} />
      <p>Hi!</p>
      <p>We’re Jaime and Jason Curtis, a husband and wife team.</p>
      <p>We’ve built on our combined 20+ years of experience in software and climate solutions to launch Option Zero, the software consultancy for climate companies & initiatives.</p>
      <p>If your mission is climate resilience, your mission is our mission.</p>

      <h2>Specializations</h2>
      <div><b>Jason:</b> data pipelines, modeling, analytics</div>
      <div><b>Jaime:</b> project & product management, team building, psychological safety</div>
      <div><b>Both:</b> full-stack development, product strategy</div>
      <h2>Stats</h2>
      <div><b>Rows processed:</b>&#62;1 billion</div>
      <div><b>Teams built:</b> ~10</div>
      <div><b>Robotic sailboats built:</b> 1</div>
      <div><b>Small humans developed:</b> 1</div>

      {/* <p>We are Jaime and Jason Curtis, a husband and wife team offering software strategy & consulting to climate startups. Between us we are ex-Facebook, -Microsoft, -Olin, and -Convoy, plus a variety of climate tech startups. We have a combined 20+ years of experience as software engineers, with deep spikes in data science, project/product management, and technical leadership. We have jointly built autonomous robotic sailboats, energy efficiency program management software, convolutional neural network powered water quality sensors, and one small human.</p>
      <p>For a taste of our problem-centric approach to problem-solving, check out Jaime’s article on <a href="https://medium.com/convoy-tech/what-is-a-design-spike-7906385663c2" target="_blank" rel="noopener noreferrer">The Design Spike</a>.</p>
      <p>Reach out at <a href="mailto:team@optionzero.co" target="_blank" rel="noopener noreferrer">team@optionzero.co</a> to start a conversation with us!</p> */}
    </div >
  )
}

export default Team