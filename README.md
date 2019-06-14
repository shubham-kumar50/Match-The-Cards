<!-- # Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md). -->

# Match The Cards

Match The Cards game randomly shuffles card and hides them. The user have to choose the similar pair of cards. Once user is able to successfully pair all the cards, the game is won.

## Game Play

### How To Play

At the start of the game you will be presented with a deck containing sixteen cards, face up for 1.5 seconds,to remember where cards of different symbols are present, and then face down. Click on a card to turn it over to reveal the symbol on the card. If after selecting two cards, they gets matched then, the cards will remain face up and change colour to green. If they do not match they will return to a face down position.

```
The tip for the game is to remember the position of the cards to aid in matching later cards with them.
```

### Scoring

```
An info symbol is provided above the deck, to check how grading is done to one's gameplay.
```
The move counter will increase by one after each pair of cards is clicked. The star rating system will decrease from 3 stars after 11 moves, and from 2 stars after 17 moves. The number of moves (pairs of cards turned over) is displayed at the top of the deck. Following is how the performace will be graded:
1) Score 3 stars, the performance is ``` Great ``` ,
2) Score 2 stars, the performance is ``` Average ``` , 
3) Score 1 star, the performance is ``` Poor ```. 

If a pair of cards get matched then ```matched``` is printed at the top of the deck and if it does not match then ```not matched``` is printed. 

Elapsed time is displayed above the deck. This will commence after the first time a card is clicked.

The game is won by matching all cards in the deck.

### Starting a New Game

This can be initiated by clicking **Ready** in the game won message pop-up or alternatively by clicking on the restart symbol above the deck.
 

If a pair of cards get matched then ```matched``` is printed at the top of the deck and if it does not match then ```not matched``` is printed. 

Elapsed time is displayed above the deck. This will commence after the first time a card is clicked.

The game is won by matching all cards in the deck.

### Starting a New Game

This can be initiated by clicking **Ready** in the game won message pop-up or alternatively by clicking on the restart symbol above the deck.
