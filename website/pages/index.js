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
          <p className={Layout.aboutPar}>Hello!</p>
          <p className={Layout.aboutPar}>I'm a software engineer based out of Denver, CO. I enjoy tinkering with css, making casino games and building snappy applications.</p>
          <p className={Layout.aboutPar}></p>
          <a className={Layout.download} href="Thomas McNutt Resume.pdf" download>Download My Resume</a>
          <p className={Layout.aboutPar}></p>
        </div>
      </main>
    </div>
  )
}

