const Hand = require('pokersolver').Hand;
const Deck = require('./DeckData.js');

//use deck function to create a deck and send it back to the client
var start = (deck) => {
}

//drawing will be done client-side randomly out of the deck


//after the second round, the client will ping the server with the hand, asking for a winner
var winner = (hand, multiplier) => {
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

module.exports = {start, winner,};