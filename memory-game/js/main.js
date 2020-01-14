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

function flipcard () {
	let cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("user flipped " + cards[cardId].rank)
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay.length === 2) {
		console.log('user has picked two cards');
		checkForMatch()
	}
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
	
} 

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click", flipcard)
		document.getElementById("game-board").appendChild(cardElement);
	}

}

createBoard();



