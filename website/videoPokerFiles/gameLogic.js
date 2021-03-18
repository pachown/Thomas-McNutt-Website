const Hand = require('pokersolver').Hand;
const Deck = require('./DeckData.js');

//use deck function to create a deck and send it back to the client
var Start = () => {
  return Deck.shuffled;
}

//drawing will be done client-side, randomly out of the deck


//after the second round, the client will ping this algo with the hand, asking for a winner
var Winner = (hand, multiplier) => {
  //Solved hand - Lots of data to parse through
  let solvedHand = Hand.solve(hand);
  //Will need to rewrite this later with accurate data parsing
  let description = solvedHand.description;
  //Find winnings by comparing hand name to known winning hands
  let winnings = victoryPoints[description] * multiplier;
  //pits given hand against best possible hand that isn't a pair of jacks [10,10,A,K,Q]
  //if given hand is worse, return 0 and the hand title

  //if given hand is victor, compare that hand's title to the victoryPoints array
    //return the score times multiplier and the hand title
}

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
}

module.exports = {Start, Winner};