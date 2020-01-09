var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function checkForMatch() {
if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again.");
	}
}

function flipcard (cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("user flipped " + cards[cardId])
	if (cardsInPlay.length === 2) {
		console.log('user has picked two cards');
		checkForMatch()
	}
	
	} 

flipcard(0);
flipcard(2);


