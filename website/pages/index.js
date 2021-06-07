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
        {/* <div className={Layout.about}>
          <h2 >Hello! I'm Thomas McNutt, a Software Engineer based out of Denver, CO. I build things on the internet such as this <a href="/">website</a>, this <a href="/casino/videoPoker">casino game</a> and this <a href="/algos">blog</a> filled with my solutions for common coding algorithms. </h2>
            <h3>
              <a className={Layout.download} href="Thomas McNutt Resume.pdf" download>Download My Resume</a>
            </h3>
        </div> */}
        <div className="styles.about" className="styles.section1" className="styles.origin"><p>Hello! My name is Thomas McNutt and I build things on the internet</p></div>
        <div className="styles.about" className="styles.section2"><p>Here is a bit about myself</p></div>
        <div className="styles.about" className="styles.section3"><p>I've always loved creating. When I was a young I loved building things such as cities and factories.</p></div>
        <div className="styles.about" className="styles.section4"><p>I have a passion for improvement and strategy which I emphasize in my hobbies such as card games, board games and computer games.</p></div>
        <div className="styles.about" className="styles.section5"><p>In fact, I enjoyed strategy games so much that I became a professional poker player for some time after high school!</p></div>
        <div className="styles.about" className="styles.section6"><p>When I decided to wrap up my poker career, I went to work for a bank where I could learn about different types of businesses and meet new people every day.</p></div>
        <div className="styles.about" className="styles.section7"><p>Eventually, the creative itch brought me to software engineering, where I can combine my love of creation, my passion for strategy, a constant improvement mindset and collaboration with brilliant people!</p></div>
      </main>
    </div>
  )
}
