import Head from 'next/head'
import Styles from '../styles/Projects.module.css'

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

        <article className={Styles.project1}>
          <h2 className={Styles.p1}>Trip Advisor Map Component</h2>
          <div className={Styles.container}>
            <ul className={Styles.bullets}>
              <li>Interactive Google Map</li>
              <li>Search Query Populated Fields</li>
              <li>Dozens of Modular Components</li>
            </ul>
            <img className={Styles.project1Img}></img>
          </div>
        </article>

        <article className={Styles.project2}>
          <h2 className={Styles.p2}>Slot Machine Application</h2>
          <div className={Styles.container}>
            <ul className={Styles.bullets}>
              <li>Slot Machine With Control Over Payout Odds</li>
              <li>Slot Machine Owner Simulator</li>
              <li>Unique Customer Generation Mechanics</li>
            </ul>
            <img className={Styles.project2Img}></img>
          </div>
        </article>
        <article className={Styles.project3}>
          <h2 className={Styles.p3}>Video Poker Application</h2>
          <div className={Styles.container}>
            <ul className={Styles.bullets}>
              <li>Classic Video Poker</li>
              <li>Easily Understandable UI</li>
              <li>Fun For All Ages</li>
            </ul>
            <img className={Styles.project3Img}></img>
          </div>
        </article>
        {/* <article className={Styles.project4}>
          <img className={Styles.project4Img}></img>
          <p className={Styles.p4}>Project 4</p>
          </article> */}
      </main>
    </document>
  )
}