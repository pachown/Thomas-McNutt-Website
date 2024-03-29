import Head from 'next/head';
import PokerStyles from '../styles/Poker.module.css';
import { useState } from 'react';
import { Start, Winner } from '../videoPokerFiles/gameLogic.js';


export default function Casino() {

  const [money, setMoney] = useState(100);
  const [cards, setCards] = useState([{ image: 'https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg', code: undefined }, { image: 'https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg', code: undefined }, { image: 'https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg', code: undefined }, { image: 'https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg', code: undefined }, { image: 'https://static7.depositphotos.com/1257959/746/v/950/depositphotos_7461948-stock-illustration-playing-card-back-side-62x90.jpg', code: undefined }]);
  const [bet, setBet] = useState(1);
  const [held, setHeld] = useState([false, false, false, false, false]);
  const [deck, setDeck] = useState(undefined);
  const [handInfo, setHandInfo] = useState(['No Hand Played Yet', 0]);
  const [betRound, setBetRound] = useState(false);

  let handleBet = (num) => {
    if (bet + num >= 51) {
      setBet(50);
    } else if (bet + num <= 0) {
      setBet(1);
    } else {
      setBet(bet + num);
    }
  };

  let handleStart = () => {
    //set bet round to disable bet controls
    setBetRound(true);
    // subtract bet from money
    setMoney(money - bet);
    // get new deck
    let tempDeck = Start();
    // use handleDeal to draw 5 cards
    let hand = handleDeal(5, tempDeck);
    setCards(hand);
  }

  let handleDeal = (cardsToDraw, tempDeck) => {
    let cards = [];
    for (var i = 0; i < cardsToDraw; i++) {
      cards.push(tempDeck.pop())
    }
    setDeck(tempDeck);
    return cards;
  }

  let handleDraw = () => {
    //draw one card for every not-held position in the array
    let tempCards = cards.slice();
    let tempDeck = deck.slice();
    let tempHeld = held.slice();
    //insert new cards in the not-held card slots
    for (var i = 0; i < 5; i++) {
      if (tempHeld[i] === false) {
        tempCards[i] = tempDeck.pop();
      }
    }
    setCards(tempCards);
    //send hand to handleEnd function
    handleEnd(tempCards);
  }

  let handleHold = (cardPosition) => {
    let tempHeld = held.slice();
    tempHeld[cardPosition] = !tempHeld[cardPosition];
    setHeld(tempHeld);
  }

  let handleEnd = (hand) => {
    //calculate final hand and winnings

    //send final hand and bet amt to solver
    let info = Winner(hand, bet);

    //add winnings to money(if any)
    setMoney(money + info.pts);
    //display final hand to DOM
    setHandInfo([info.description, info.pts]);

    //re-enable bet controls
    setBetRound(false);
    setHeld([false, false, false, false, false]);
  }

  return (
    <div className={PokerStyles.container}>
      <Head>
        <link rel="icon" href="/logo-dark-plain.png" />
        <meta name="keywords" content="web development, programming, portfolio, Thomas McNutt, thomas, mcnutt, software engineer, software, engineer, web, developer" />
      </Head>
      <main className={PokerStyles.main}>
        <div className={PokerStyles.topBar}>
          <div className={PokerStyles.money}>Cash: ${money}</div>
          <div className={PokerStyles.gametype}>JACKS OR BETTER TO WIN!</div>
          <div className={PokerStyles.gametype}>**Press New Round To Start**</div>
        </div>
        <div className={PokerStyles.cardTable}>
          <div className={PokerStyles.cards}>
            <img className={PokerStyles.card} src={cards[0].image} />
            <img className={PokerStyles.card} src={cards[1].image} />
            <img className={PokerStyles.card} src={cards[2].image} />
            <img className={PokerStyles.card} src={cards[3].image} />
            <img className={PokerStyles.card} src={cards[4].image} />
          </div>
        </div>
        <div className={PokerStyles.handInfo}>
          Last Hand: {handInfo[0]} Won: {handInfo[1]}
        </div>
        {betRound &&
          <div className={PokerStyles.holdbtns}>
            <button className={held[0] ? PokerStyles.clickedHoldBtn : PokerStyles.holdbtn} onClick={() => handleHold(0)}>HOLD</button>
            <button className={held[1] ? PokerStyles.clickedHoldBtn : PokerStyles.holdbtn} onClick={() => handleHold(1)}>HOLD</button>
            <button className={held[2] ? PokerStyles.clickedHoldBtn : PokerStyles.holdbtn} onClick={() => handleHold(2)}>HOLD</button>
            <button className={held[3] ? PokerStyles.clickedHoldBtn : PokerStyles.holdbtn} onClick={() => handleHold(3)}>HOLD</button>
            <button className={held[4] ? PokerStyles.clickedHoldBtn : PokerStyles.holdbtn} onClick={() => handleHold(4)}>HOLD</button>
          </div>
        }
        {!betRound &&
          <div className={PokerStyles.betBar}>
            <button className={PokerStyles.betBtn}>BET</button>
            <button className={PokerStyles.betBtn} onClick={() => handleBet(1)}>+</button>
            <button className={PokerStyles.betBtn} onClick={() => handleBet(-1)}>-</button>
            <button className={PokerStyles.betBtn} onClick={() => {
              handleBet(50)
              handleStart()
            }}>MAX BET</button>
            <button className={PokerStyles.betBtn} onClick={() => handleStart()}>New Round</button>
            <div className={PokerStyles.betAmt}>Bet {bet}</div>
          </div>
        }
        {betRound === true &&
          <div className={PokerStyles.betBar}>
            <button className={PokerStyles.holdbtn} onClick={() => handleDraw()}>DRAW</button>
          </div>
        }
      </main>
      <main className={PokerStyles.info}>
        <table className={PokerStyles.table}>
          <tbody>
            <tr className={PokerStyles.tr}>
              <th className={PokerStyles.th}>Hand Rank</th>
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