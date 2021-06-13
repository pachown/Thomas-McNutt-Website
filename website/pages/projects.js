import Head from 'next/head'
import Styles from '../styles/Projects.module.css'

export default function Projects() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Thomas McNutt Website</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>
        <link rel="icon" href="/logo-dark-plain.png" />
        <meta name="keywords" content="web development, programming" />
      </Head>
      <main className={Styles.main}>
        <h1 className={Styles.title}>Projects</h1>
        <article className={Styles.project1}>
          <h2 className={Styles.p1}>Trip Advisor Map Component</h2>
          <img className={Styles.project1Img}></img>
        </article>
        <article className={Styles.project2}>
          <h2 className={Styles.p2}>Slot Machine Application</h2>
          <img className={Styles.project2Img}></img>
        </article>
        <article className={Styles.project3}>
          <h2 className={Styles.p3}>Video Poker Application</h2>
          <ul className={Styles.bullets3}>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
          <img className={Styles.project3Img}></img>
        </article>
        {/* <article className={Styles.project4}>
          <img className={Styles.project4Img}></img>
          <p className={Styles.p4}>Project 4</p>
          </article> */}
      </main>
    </div>
  )
}