import Head from 'next/head'
import Layout from '../../styles/Layout.module.css'
import PokerStyles from '../../styles/Poker.module.css'


export default function Casino() {
  return (
    <div className={PokerStyles.container}>
      <Head>
        <title>Video Poker</title>
        <link rel="icon" href="/logo-dark-plain.png" />
        <meta name="keywords" content="web development, programming, portfolio, Thomas McNutt, thomas, mcnutt, software engineer, software, engineer, web, developer" />
      </Head>
      <main className={PokerStyles.main}>
        <p>hello</p>
      </main>
      <main className={PokerStyles.info}>
      <table className={PokerStyles.table}>
        <tr className={PokerStyles.tr}>
          <th className={PokerStyles.th}> Hand Rank</th>
          <th className={PokerStyles.th}>Winnings</th>
        </tr>
        <tr className={PokerStyles.tr}>
          <th className={PokerStyles.th}>ROYAL FLUSH</th>
          <th className={PokerStyles.th}>250</th>
        </tr>
        <tr className={PokerStyles.tr}>
          <th className={PokerStyles.th}>STRAIT FLUSH</th>
          <th className={PokerStyles.th}>50</th>
        </tr>
        <tr className={PokerStyles.tr}>
          <th className={PokerStyles.th}>FOUR OF A KIND</th>
          <th className={PokerStyles.th}>25</th>
        </tr>
        <tr className={PokerStyles.tr}>
          <th className={PokerStyles.th}>FULL HOUSE</th>
          <th className={PokerStyles.th}>10</th>
        </tr>
        <tr className={PokerStyles.tr}>
          <th className={PokerStyles.th}>FLUSH</th>
          <th className={PokerStyles.th}>6</th>
        </tr>
        <tr className={PokerStyles.tr}>
          <th className={PokerStyles.th}>STRAIT</th>
          <th className={PokerStyles.th}>4</th>
        </tr>
        <tr className={PokerStyles.tr}>
          <th className={PokerStyles.th}>THREE OF A KIND</th>
          <th className={PokerStyles.th}>3</th>
        </tr>
        <tr className={PokerStyles.tr}>
          <th className={PokerStyles.th}>TWO PAIR</th>
          <th className={PokerStyles.th}>2</th>
        </tr>
        <tr className={PokerStyles.tr}>
          <th className={PokerStyles.th}>JACK PAIR OR BETTER</th>
          <th className={PokerStyles.th}>1</th>
        </tr>
      </table>
      </main>
    </div>
  )
}