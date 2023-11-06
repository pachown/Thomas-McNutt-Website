import Head from 'next/head'
import Styles from '../styles/Projects.module.css'
import Image from 'next/image'

export default function Projects() {
  return (
    <document>
      <Head>
        <title>Thomas McNutt Website</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" href="/logo-dark-plain.png" />
        <meta name="keywords" content="web development, programming" />
      </Head>
      <main className={Styles.main}>
        <h1 className={Styles.title}>Projects</h1>

        <article className={Styles.project}>
          <h2 className={Styles.projectTitle}>Trip Advisor Map Component</h2>
          <div className={Styles.container}>
            <ul className={Styles.bullets}>
              <li>Interactive Google Map</li>
              <li>Search Query Populated Fields</li>
              <li>Dozens of Modular Components</li>
            </ul>
            <Image
            src={require("../public/TripAdvisor.jpeg")}
            width={500}
            height={200}
            alt="TripAdvisor lookalike Website"
            loading="lazy"
            ></Image>
            {/* <img src={require('../public/TripAdvisor.jpeg')} loading="lazy"></img> */}
          </div>
        </article>

        <article className={Styles.project}>
          <h2 className={Styles.projectTitle}>Video Poker Application</h2>
          <div className={Styles.container}>
            <ul className={Styles.bullets}>
              <li>Classic Video Poker</li>
              <li>Easily Understandable UI</li>
              <li>Fun For All Ages</li>
              <li>Playable <a href="/videoPoker" className="menu-item">Here</a></li>
            </ul>
            <img></img>
          </div>
        </article>

        <article className={Styles.project}>
          <h2 className={Styles.projectTitle}>Slot Machine Application</h2>
          <div className={Styles.container}>
            <ul className={Styles.bullets}>
              <li>Slot Machine With Control Over Payout Odds</li>
              <li>Slot Machine Owner Simulator</li>
              <li>Unique Customer Generation Mechanics</li>
            </ul>
            <img></img>
          </div>
        </article>
        <article className={Styles.project}>
          <img ></img>
          <p>Project 4</p>
        </article>
        {/* <article className={Styles.project4}>
          <img className={Styles.project4Img}></img>
          <p className={Styles.p4}>Project 4</p>
          </article> */}
      </main>
    </document>
  )
}