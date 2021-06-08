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
        <div className={Styles.section1}><p>Hello! My name is Thomas McNutt and I build things on the internet. </p><p>Here is a bit about myself:</p></div>
        <div className={Styles.section2}><p>I've always loved creating. When I was a young I loved building new things and improving old things.</p></div>
        <div className={Styles.section3}><p>I have a passion for improvement and strategy which I exercise with my hobbies such as: card games, board games, and computer games.</p></div>
        <div className={Styles.section4}><p>In fact, I enjoy strategy games so much that I became a professional poker player for a year! While fun, it wasn't the most stable career, as you can imagine.</p></div>
        <div className={Styles.section5}><p>Afterwards I worked 5 years as a manager at a bank where I learned about different businesses models, met new people, and worked heavily with numbers and data.</p></div>
        <div className={Styles.section6}><p>Eventually, the creative itch brought me to software engineering, where I was able to finally combine my love of creation, my passion for strategy, a constant improvement mindset, and I get to collaboration with brilliant people!</p></div>
      </main>
    </div>
  )
}
