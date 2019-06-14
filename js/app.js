/*
 * Create a list that holds all of your cards.
 */
let cards = ["fa fa-diamond","fa fa-diamond","fa fa-paper-plane-o","fa fa-paper-plane-o","fa fa-anchor","fa fa-anchor","fa fa-bolt","fa fa-bolt","fa fa-cube","fa fa-cube","fa fa-leaf","fa fa-leaf","fa fa-bicycle","fa fa-bicycle","fa fa-bomb","fa fa-bomb"];

let cardsContainer = document.querySelector(".deck");

let openedCards = []; //an array to check if any card is flipped.
let matchedCards = []; //an array to keep the matched cards.

/*
* Fuction to add cards in the deck.
*/
function initiate(){
	cards = shuffle(cards);
	for(let i = 0;i<cards.length;i++){
	let card = document.createElement("li");
	card.classList.add("card");
	card.innerHTML =  `<i class = " ${cards[i]} "></i>`;
	cardsContainer.appendChild(card);
	card.classList.add("open" , "show" , "disable");
	setTimeout(function(){
		card.classList.remove("open" , "show" , "disable");
	}, 1500);
	clickEvent(card);
	}
}

let firstClick = true;

/*
* Fuction to activate the clicking events on the cards.
*/

function clickEvent(card){
	card.addEventListener('click' , function(){

		if(firstClick){
			startTimer();
			firstClick = false;
		}

		let currentCard = this;
		let prevCard = openedCards[0];
		if(openedCards.length  === 1){
			card.classList.add("open" , "show" , "disable");
			openedCards.push(currentCard);

			//code when cards get matched.

			if(currentCard.innerHTML === prevCard.innerHTML){
				currentCard.classList.add("match");
				prevCard.classList.add("match");
				match();
				setTimeout(function(){
					match_Nomatch.innerHTML = "";
				}, 600);
				matchedCards.push(currentCard,prevCard);
				openedCards = [];
				gameOver();
			}

			//code when cards do not match.

			else{
				nomatch();
				setTimeout(function(){
					currentCard.classList.remove("open" , "show" , "disable");
					prevCard.classList.remove("open" , "show" , "disable");
					match_Nomatch.innerHTML = "";
					openedCards = [];
				}, 600);
			}

			numberOfMoves();
			rating();
		}
		else{
			card.classList.add("open" , "show" , "disable");
			openedCards.push(this);
		}
	});
}

/*
* Code to give if two cards are matched or not.
*/

let match_Nomatch = document.querySelector(".match_nomatch");

/*
* Function to tell "matched" when two cards get matched.
*/

function match(){
	match_Nomatch.innerHTML = "matched";
}

/*
* Function to tell "not matched" when two cards do not match.
*/

function nomatch(){
	match_Nomatch.innerHTML = "not matched";
}

/*
* Function to give an message for game is over.
*/

function gameOver(){
	setTimeout(function(){
		if(matchedCards.length === cards.length){

			stopTimer();

			//function to give game over details pop-up message
			swal({
  				title: "You Solved It!",
  				text: `Time Taken : ${timerContainer.textContent}
  				Moves : ${moves}
  				Grade : ${performanceContainer.innerHTML}
  				
  				Do you want to replay it ?`,
  				icon: "success",
  				buttons: ["Close", "Ready"],
			})
			.then((playAgain) => {
				if(playAgain) {
					setTimeout(function(){
						reStart();
					}, 500)
				}
			});
		}
	},200);	
}

/*
* Code to give information about rating system on clicking info button.
*/

let infoContainer = document.querySelector(".info");
infoContainer.addEventListener("click" , function(){
	// function to give information pop-up message
	swal({
		title: "Your performance is rated as follows:",
		text: `1) If no. of moves are less than 12 , you are Great!
	2) If no. of moves are between 11 and 18 , you are Average! 
	3) If no. of moves are greater than 17 , your performance is Poor!`,
		icon: "info",
	})
});

/*
* Code to activate restart button.
*/

let restartButton = document.querySelector(".restart");

/*
* Function to restart the game.
*/

restartButton.addEventListener("click" , reStart);

function reStart(){
	cardsContainer.innerHTML = "";
	
	moves = 0;
	movesContainer.innerHTML = moves;

	starsContainer.innerHTML = stars + stars + stars;

	clearTimer();
	stopTimer();
	firstClick = true;

	initiate();

	matchedCards = [];
}

/*
* Code to count number of moves.
*/

let movesContainer = document.querySelector(".moves");
let moves = 0;

/*
* Function to maintain number of moves.
*/

function numberOfMoves(){
	moves += 1;
	movesContainer.innerHTML = moves;
}

/*
* Code to give rating.
*/

let performanceContainer = document.querySelector(".performance");
performanceContainer.innerHTML = "Great!"
let starsContainer = document.querySelector(".stars");
let stars = `<li><i class="fa fa-star"></i></li>`;
starsContainer.innerHTML = stars + stars + stars;
let numberOfStars;

/*
* Function to maintain stars.
*/
console.log(numberOfStars);
function rating(){
	if(moves < 12){
		performanceContainer.innerHTML = "Great!"
		starsContainer.innerHTML = stars + stars + stars;
		numberOfStars = starsContainer.querySelector("li");
	}
	else if(moves < 18){
		performanceContainer.innerHTML = "Average!"
		starsContainer.innerHTML = stars + stars;
		numberOfStars = starsContainer.querySelector("li");
	}
	else{
		performanceContainer.innerHTML = "Poor!"
		starsContainer.innerHTML = stars;
		numberOfStars = starsContainer.querySelector("li");
	}
}

/*
* Code for stopwatch.
*/

let timerContainer = document.querySelector(".stopwatch");
let seconds = 0 , minutes = 0 , hours = 0 , time = 0;

/*
* Function to increase time.
*/

function addTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    timerContainer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    startTimer();
}

/*
* Function to start the stopwatch.
*/

function startTimer(){
	time = setTimeout( addTime , 1000);
}

/*
* Function to stop the stopwatch.
*/

function stopTimer(){
	clearTimeout(time);
}

/*
* Function to resate the clock to 00:00:00.
*/

function clearTimer(){
	timerContainer.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}

/*
* Calling the function to initiate game.
*/

initiate();

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
