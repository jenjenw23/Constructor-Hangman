var Letter = require('./letter.js');

var Word = function (input) {
    var letterArr = [];

    for (var letter in input) {
        letterArr.push(new Letter(input[letter].toLowerCase()));
    };

    this.word = letterArr;

    this.showLetters = function () {
        var word = "";
        for (var i = 0; i < this.word.length; i++) {
            word += this.word[i].letterOrUnderscore() + " ";
        };
        return word;
    }

    this.checkGuess = function (ulChar) {
        for (var i = 0; i < this.word.length; i++) {
            this.word[i].updateGuess(ulChar);
        }
        return this.showLetters();
    }

    this.getAnswer = function () {
        console.log(this.word);
    }

    this.notFinished = function () {
        var stillNeedsGuessing = false;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].letterOrUnderscore() == "_") {
                stillNeedsGuessing = true;
                break;
            }
        }

        return stillNeedsGuessing;
    }

}
module.exports = Word;