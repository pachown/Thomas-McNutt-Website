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
        <div></div>
        <p className={Layout.aboutPar}>Thomas McNutt - A Software Engineer based out of Denver, CO.</p>
        <a className={Layout.download} href="Thomas McNutt Resume.pdf" download>Download My Resume</a>
        <p className={Layout.aboutPar}></p>
      </main>
    </div>
  )
}

