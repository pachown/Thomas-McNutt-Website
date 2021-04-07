const Hand = require('pokersolver').Hand;
const Deck = require('./DeckData.js');

//use deck function to create a deck and send it back to the client
var Start = () => {

  return Deck.shuffled();
}

//drawing will be done client-side, randomly out of the deck


//after the second round, the client will ping this algo with the hand, asking for a winner
var Winner = (hand, multiplier) => {
  //Solved hand - Lots of data to parse through
  let parsedHand = [];
  hand.forEach((card)=>{parsedHand.push(card.code)})
  let solvedHand = Hand.solve(parsedHand);

  //Find winnings by comparing hand name to known winning hands
  let points = 0;
  for(var i = 0; i < handsToBeat.length; i++) {
    // console.log(handsToBeat[i].hand, solvedHand);
    let winner = Hand.winners([solvedHand, handsToBeat[i].hand]);
    if (winner[0].cardPool === solvedHand.cardPool) {
      points = victoryPoints[handsToBeat[i].name];
      break;
    }
  }
  console.log(solvedHand.descr, points);
  //pits given hand against best possible hand that isn't a pair of jacks [10,10,A,K,Q]
  //if given hand is worse, return 0 and the hand title

  //if given hand is victor, compare that hand's title to the victoryPoints array
    //return the score times multiplier and the hand title

  return {
    description: solvedHand.descr,
    pts: points * multiplier
  };
}

var handsToBeat = [
  {name: 'Royal Flush', hand: Hand.solve(['9H','TH','JH','QH','KH'])},
  {name: 'Strait Flush', hand: Hand.solve(['2H','3H','4H','5H','6H'])},
  {name: 'Four of a kind', hand: Hand.solve(['AH','AS','AC','KH','KS'])},
  {name: 'Full House', hand: Hand.solve(['AH','KH','QH','JH','9H'])},
  {name: 'Flush', hand: Hand.solve(['AH','KS','QD','JH','TH'])},
  {name: 'Strait', hand: Hand.solve(['AH','AS','AC','KH','QH'])},
  {name: 'Three of a Kind', hand: Hand.solve(['AH','AC','KH','KC','QH'])},
  {name: 'Two Pair', hand: Hand.solve(['AH','AC','KH','QH','JH'])},
  {name: 'Jacks or Better', hand: Hand.solve(['TH','TS','AH','KH','QH'])},
]

var victoryPoints = {
  'Royal Flush': 250,
  'Strait Flush': 50,
  'Four of a kind': 25,
  'Full House': 9,
  'Flush': 6,
  'Strait': 4,
  'Three of a Kind': 3,
  'Two Pair': 2,
  'Jacks or Better': 1,
  'High Card': 0,
}

module.exports = {Start, Winner};