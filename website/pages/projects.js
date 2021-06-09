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
        <h1 className={Styles.title}>My Projects</h1>
        <article className={Styles.project1}>
          <p className={Styles.p1}>Project 1</p>
          <img className={Styles.project1Img}></img>
        </article>
        <article className={Styles.project2}>
          <img className={Styles.project2Img}></img>
          <p className={Styles.p1}>Project 2</p>
        </article>
        <article className={Styles.project3}>
          <p className={Styles.p1}>Project 3</p>
          <img className={Styles.project3Img}></img>
        </article>
        <article className={Styles.project4}>
          <img className={Styles.project4Img}></img>
          <p className={Styles.p1}>Project 4</p>
          </article>
      </main>
    </div>
  )
}