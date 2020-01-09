var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
let card0ne = cards[0];
cardsInPlay.push(card0ne);
console.log("User flipped " + cardsInPlay[0]);
let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);
if (cardsInPlay.length === 2) {
	console.log('user has picked two cards');
	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again.");
	}
} 
