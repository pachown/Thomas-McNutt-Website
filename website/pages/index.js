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
          <p className={Layout.aboutPar}>Coding passions include website design, casino game building and web security.</p>
          <p className={Layout.aboutPar}>Most-mastered skills include Javascript, CSS, React, and AWS Deployment</p>
          <p className={Layout.aboutPar}>I'm available to work on open source projects so feel free to send me an email with any proposals.</p>
          <a className={Layout.download} href="Thomas McNutt Resume.pdf" download>Download My Resume</a>
        </div>
      </main>
    </div>
  )
}

