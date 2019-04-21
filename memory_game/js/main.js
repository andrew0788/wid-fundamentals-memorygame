var cards = [
  {
rank: 'queen',
suit: 'hearts',
cardImage: 'image/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'image/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'image/king-of-hearts.png'
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'image/king-of-diamonds.png'
}
];
var cardsInPlay = [];
function flipCard(cardId){
  cardsInPlay.push(cards[cardID]);
  console.log(cards[cardId].rank)
  if (cardsInPlay.length === 2){
    if(cardsInPlay[0] === cardsInPlay[1]){
      alert("You Found a match!");
    }else{
      alert('Try again');
    }
  }
}
function createBoard() {
  for (var i =0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
  }
}
console.log(createBoard);
