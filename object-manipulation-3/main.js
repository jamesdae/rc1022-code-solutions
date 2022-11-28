console.log('Lodash is loaded:', typeof _ !== 'undefined');

const rankArray = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
const suitArray = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const nameArray = ['Malcolm', 'Hal', 'Stevie', 'Abe'];

const players = [];
const cards = [];

function playerProperties() {
  this.name = null;
  this.hand = [];
}

function Player() {
  playerProperties.call(this);
}

Player.prototype = _.create(playerProperties.prototype, {
  constructor: Player
});

function cardProperties() {
  this.rank = null;
  this.suit = null;
}

function Card() {
  cardProperties.call(this);
}

Card.prototype = _.create(cardProperties.prototype, {
  constructor: Card
});

function createDeck() {
  for (var s = 0; s < suitArray.length; s++) {
    for (var j = 0; j < rankArray.length; j++) {
      var card = new Card();
      card.suit = suitArray[s];
      card.rank = rankArray[j];
      cards.push(card);
    }
  }
}

function shuffle() {
  for (let i = 0; i < cards.length; i++) {
    const randomIndex = _.random(0, cards.length - 1, false);
    const oldCard = cards[i];
    cards[i] = cards[randomIndex];
    cards[randomIndex] = oldCard;
  }
}

function dealCards(i) {
  var chunks = _.chunk(cards, 2);
  return chunks[i];
}

function createPlayer() {
  for (var i = 0; i < nameArray.length; i++) {
    var player = new Player();
    player.name = nameArray[i];
    player.hand = dealCards(i);
    players.push(player);
  }
}

function countPoints() {
  for (var i = 0; i < players.length; i++) {
    let score = 0;
    players[i].hand.forEach(card => {
      switch (card.rank) {
        case 2:
          score += 2;
          break;
        case 3:
          score += 3;
          break;
        case 4:
          score += 4;
          break;
        case 5:
          score += 5;
          break;
        case 6:
          score += 6;
          break;
        case 7:
          score += 7;
          break;
        case 8:
          score += 8;
          break;
        case 9:
          score += 9;
          break;
        case 10:
        case 'Jack':
        case 'Queen':
        case 'King':
          score += 10;
          break;
        case 'Ace':
          score += 11;
          break;
        default:
          score = null;
      }
    });
    players[i].score = score;
  }
}

function findWinner(players) {
  const scores = [];
  for (var i = 0; i < players.length; i++) {
    players.forEach(player => {
      scores.push(player.score);
    });
    if (players[i].score === _.max(scores)) {

      console.log(players[i].name, 'is a winner!');
    }
  }
}

createDeck();
shuffle();
createPlayer();
countPoints();
findWinner(players);

console.log('Cards used: ', cards);
console.log('Players: ', players);
