import Head from 'next/head'
import Layout from '../styles/Layout.module.css'


export default function About() {
  return (
    <div className={Layout.container}>
      <Head>
        <title>Thomas McNutt Website</title>
        <link rel="icon" href="/logo-dark-plain.png" />
        <meta name="keywords" content="web development, programming" />
        </Head>
      <main className={Layout.main}>
        <div className={Layout.about}>
          <h2 className={Layout.aboutPar}>Hello! I'm Thomas McNutt, a Software Engineer based out of Denver, CO</h2>
          <p className={Layout.aboutPar}>Coding passions include <u>website design</u>, <u>casino game</u> building and <u>web security</u>.</p>
          <p className={Layout.aboutPar}>Most-mastered skills include <u>Javascript</u>, <u>CSS</u>, <u>React</u>, and AWS Deployment</p>
          <p className={Layout.aboutPar}>Check out my algos section for my solution to LeetCode problems as well as a found solution</p>
          <a className={Layout.download} href="Thomas McNutt Resume.pdf" download>Download My Resume</a>
        </div>
      </main>
    </div>
  )
}

