const cards = [{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

function checkForMatch() {
if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again.");
	}
}

function flipcard (cardId) {
	cardsInPlay.push(cards[cardId].rank);
	console.log("user flipped " + cards[cardId].rank)
	if (cardsInPlay.length === 2) {
		console.log('user has picked two cards');
		checkForMatch()
	}
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
	
} 

flipcard(0);
flipcard(2);




