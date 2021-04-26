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
          <h2 >Hello! I'm Thomas McNutt, a Software Engineer based out of Denver, CO. I build things on the internet such as this <a href="/">website</a>, this <a href="/casino/videoPoker">casino game</a> and this <a href="/algos">blog</a> filled with my solutions for common coding algorithms. </h2>
            <h3>
              <a className={Layout.download} href="Thomas McNutt Resume.pdf" download>Download My Resume</a>
            </h3>
        </div>
      </main>
    </div>
  )
}
