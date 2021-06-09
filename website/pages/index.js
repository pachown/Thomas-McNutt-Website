import Head from 'next/head'
import Styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Thomas McNutt Website</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>
        <link rel="icon" href="/logo-dark-plain.png" />
        <meta name="keywords" content="web development, programming" />
      </Head>
      <main className={Styles.main}>
        <div className={Styles.section1}><article className={Styles.p3}>Hello! My name is Thomas McNutt and I build things on the internet. {"\n"}About me:</article></div>
        <div className={Styles.section2}><article className={Styles.p2}>I've always loved creating. Since I was young I've loved building new things and improving old things.</article></div>
        <div className={Styles.section3}><article className={Styles.p1}>I have a passion for improvement and strategy which I exercise with my hobbies: card games, board games, and computer games.</article></div>
        <div className={Styles.section4}><article className={Styles.p2}>In fact, I enjoy strategy games so much that I became a professional poker player for a year! While fun, it wasn't a long term career.</article></div>
        <div className={Styles.section5}><article className={Styles.p1}>I worked 5 years as a manager at a bank where I learned about businesses, met new people, and worked heavily with numbers and data.</article></div>
        <div className={Styles.section6}><article className={Styles.p2}>Eventually, the creative itch brought me back to software engineering, where I was able to finally combine my love of creation, my passion for strategy, an improvement-based mindset, and collaboration with brilliant people!</article></div>
      </main>
    </div>
  )
}
