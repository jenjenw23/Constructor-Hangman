var Word = require('./word.js')
var wordList = require('./wordlist.js')
var inquirer = require('inquirer');
var prompt = require('prompt');

// select ramdom word from wordList import
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var gameWord = new Word(randomWord);

var guessesLeft = 10;

console.log("*******************************************")
console.log('Welcome to Zodiac Hangman!')
console.log("*******************************************")

inquirer.prompt([
    {
        type: "confirm",
        name: "playgame",
        message: "Do you want to play a game?"
    }
])
    .then(function (response) {
        if (response.playgame) {
            startGame();
        } else {
            console.log("\r\n" + "Goodbye!")
        };
    });


var startGame = function () {

    inquirer.prompt([
        {
            type: "input",
            name: "userGuess",
            message: "Guess a letter!"
        }
    ])
        .then(function (inquirerResponse) {
            guessesLeft--;
            console.log(gameWord.checkGuess(inquirerResponse.userGuess));

            if (guessesLeft === 0) {
                console.log("\r\n" + "Out of guesses, game over!" + "\r\n")
                console.log("The correct word was " + randomWord + "\r\n")
                playAgain();
            } else if (!gameWord.notFinished()) {
                console.log("\r\n" + "Great job, you win!" + "\r\n");
                playAgain();
                    } else {
                        console.log("\r\n" + "You have " + guessesLeft + " guesses left!" + "\r\n");
                        startGame();
                    }
        });
}


    function playAgain(){
        inquirer.prompt([
            {
                type: "confirm",
                name: "playgame",
                message: "Do you want to play again?"
            }
        ])
            .then(function (response) {
                if (response.playgame) {
                    guessesLeft = 10;
                    gameWord = new Word(wordList[Math.floor(Math.random() * wordList.length)]);
                    startGame();
                } else {
                    console.log("Goodbye!")
                };
            });  
    }