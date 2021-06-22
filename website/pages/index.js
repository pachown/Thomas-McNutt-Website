import Head from 'next/head'
import Styles from '../styles/About.module.css'

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
        <h1 className={Styles.title}>About Me</h1>
        <div className={Styles.section1}>
          <img className={Styles.faceShot} ></img>
          <article className={Styles.p3}>Hello! My name is Thomas McNutt and I design and build things on the internet.</article>
          </div>
        <div className={Styles.container1}>
          <div className={Styles.chevron}></div>
          <div className={Styles.chevron}></div>
          <div className={Styles.chevron}></div>
        </div>
        <div className={Styles.section2}><article className={Styles.p2}>I love building things. Since I was young I've loved building new things and improving old things.</article></div>
        <div className={Styles.container1}>
          <div className={Styles.chevron}></div>
          <div className={Styles.chevron}></div>
          <div className={Styles.chevron}></div>
        </div>
        <div className={Styles.section3}><article className={Styles.p1}>I have a passion for improvement and strategy which I exercise with some of my hobbies: card games, board games, and computer games.</article></div>
        <div className={Styles.container1}>
          <div className={Styles.chevron}></div>
          <div className={Styles.chevron}></div>
          <div className={Styles.chevron}></div>
        </div>
        <div className={Styles.section4}><article className={Styles.p2}>In fact, I enjoy strategy games so much that I became a professional poker player for a time! I was ranked in the top 95% for win-rate in online tournaments.</article></div>
        <div className={Styles.container1}>
          <div className={Styles.chevron}></div>
          <div className={Styles.chevron}></div>
          <div className={Styles.chevron}></div>
        </div>
        <div className={Styles.section5}><article className={Styles.p1}>I worked 5 years as a manager at a bank where I learned about business, met new people, and worked heavily with numbers and data.</article></div>
        <div className={Styles.container1}>
          <div className={Styles.chevron}></div>
          <div className={Styles.chevron}></div>
          <div className={Styles.chevron}></div>
        </div>
        <div className={Styles.section6}><article className={Styles.p2}>In 2019, the creative itch brought me to software engineering where I was able to finally combine my love of creation, my passion for strategy, and collaboration with brilliant people!</article></div>
      </main>
    </div>
  )
}
