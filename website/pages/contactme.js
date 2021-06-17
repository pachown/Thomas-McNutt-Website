import Head from 'next/head'
import Styles from '../styles/Contact.module.css'
import { SocialIcon } from 'react-social-icons'

export default function About() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Thomas McNutt Website</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" href="/logo-dark-plain.png" />
        <meta name="keywords" content="web development, programming" />
      </Head>
      <main className={Styles.main}>
        <h1 className={Styles.title}>Contact Me</h1>
        <div className={Styles.footer}>
          <h3>Reach Me @:</h3>
          <SocialIcon url="https://www.linkedin.com/in/thomas-mcnutt-97526588/" />
          <SocialIcon url="https://github.com/pachown" />
          <a href="mailto:Pachown@gmail.com">
            Email Me
          </a>
        </div>
      </main>
    </div>
  )
}


