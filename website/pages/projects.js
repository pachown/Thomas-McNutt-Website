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
        <h1></h1>
        <article className={Styles.project1}>Project 1</article>
        <article className={Styles.project2}>Project 2</article>
        <article className={Styles.project3}>Project 3</article>
        <article className={Styles.project4}>Project 4</article>
      </main>
    </div>
  )
}