import Head from 'next/head';
import PokerStyles from '../../styles/Poker.module.css';
import {useState} from 'react';
import {Start, Winner} from '../../videoPokerFiles/gameLogic.js';


export default function Casino() {

  const [money,setMoney] = useState(100);
  const [cards, setCards] = useState([['https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg', undefined],['https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg', undefined],['https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg', undefined],['https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg', undefined],['https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg', undefined]]);
  const [bet, setBet] = useState(1);
  const [held, setHeld] = useState(0);
  const [deck, setDeck] = useState(undefined);
  const [handInfo, setHandInfo] = useState(['Full House Jacks full of threes', 10]);
  const [betRound, setBetRound] = useState(false);

  let handleBet = (num) => {
    if (bet+num >= 6) {
      setBet(5);
    } else if (bet+num <= 0) {
      setBet(1);
    } else {
      setBet(bet+num);
    }
  };

  let handleStart = () => {
    //set bet round to disable bet controls
    setBetRound = (true);
    // subtract bet from money
      setMoney = (money - bet);
    // get new deck
      setDeck = (Start());
      console.log(deck);
    // use handleDeal for each slot in cards array
    // reset card holding
    // disable betting
  }

  let handleDeal = () => {
    //deal one card off the deck
  }

  let handleEnd = () => {
    //calculate final hand and winnings

    //add winnings to money(if any)

    //display final hand to DOM

    //re-enable bet controls
  }

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
            <img className={PokerStyles.card} src={cards[0][0]} />
            <img className={PokerStyles.card} src={cards[1][0]} />
            <img className={PokerStyles.card} src={cards[2][0]} />
            <img className={PokerStyles.card} src={cards[3][0]} />
            <img className={PokerStyles.card} src={cards[4][0]} />
          </div>
        </div>
        <div className={PokerStyles.handInfo}>
          Last Hand: {handInfo[0]} Won: {handInfo[1]}
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
          <button className={PokerStyles.betBtn} onClick={() => handleStart()}>New Round</button>
          <div className={PokerStyles.betAmt}>Bet {bet}</div>
        </div>
      </main>
      <main className={PokerStyles.info}>
        <table className={PokerStyles.table}>
          <tbody>
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
          </tbody>
        </table>
      </main>
    </div>
  )
}