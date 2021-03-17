import Head from 'next/head';
import PokerStyles from '../../styles/Poker.module.css';
import {useState} from 'react';


export default function Casino() {

  const [money,setMoney] = useState(100);
  const [cards, setCards] = useState(['https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg','https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg','https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg','https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg','https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg']);
  const [bet, setBet] = useState(1);
  const [held, setHeld] = useState(0);

  let handleBet = (num) => {
    if (bet+num >= 6) {
      setBet(5);
    } else if (bet+num <= 0) {
      setBet(1);
    } else {
      setBet(bet+num)
    }
  };

  return (
    <div className={PokerStyles.container}>
      <Head>
        <title>Video Poker</title>
        <link rel="icon" href="/logo-dark-plain.png" />
        <meta name="keywords" content="web development, programming, portfolio, Thomas McNutt, thomas, mcnutt, software engineer, software, engineer, web, developer" />
      </Head>
      <main className={PokerStyles.main}>
        <div className={PokerStyles.topBar}>
          <div className={PokerStyles.money}>Cash: ${money}</div>
          <div className={PokerStyles.gametype}>JACKS OR BETTER TO WIN!</div>
        </div>
        <div className={PokerStyles.cardTable}>
          <div className={PokerStyles.cards}>
            <img className={PokerStyles.card} src={cards[0]} />
            <img className={PokerStyles.card} src={cards[1]} />
            <img className={PokerStyles.card} src={cards[2]} />
            <img className={PokerStyles.card} src={cards[3]} />
            <img className={PokerStyles.card} src={cards[4]} />
          </div>
        </div>
        <div className={PokerStyles.holdbtns}>
          <button className={PokerStyles.holdbtn}>HOLD</button>
          <button className={PokerStyles.holdbtn}>HOLD</button>
          <button className={PokerStyles.holdbtn}>HOLD</button>
          <button className={PokerStyles.holdbtn}>HOLD</button>
          <button className={PokerStyles.holdbtn}>HOLD</button>
        </div>
        <div className={PokerStyles.betBar}>
          <button className={PokerStyles.betBtn}>BET</button>
          <button className={PokerStyles.betBtn} onClick={() => handleBet(1)}>+</button>
          <button className={PokerStyles.betBtn} onClick={() => handleBet(-1)}>-</button>
          <button className={PokerStyles.betBtn} onClick={() => handleBet(5)}>MAX BET</button>
          <button className={PokerStyles.betBtn}>New Round</button>
          <div className={PokerStyles.betAmt}>Bet {bet}</div>
        </div>
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