var Letter = function (ulChar) {
    this.ulChar = ulChar;
    this.letterGuessed = false;
    // display letter or underscore
    this.letterOrUnderscore = function () {
        if (this.letterGuessed === true) {
            return ulChar;
        } else {
            return "_";

        }
    }
    // has letter been guessed
    this.updateGuess = function (theGuess) {
        if (theGuess === this.ulChar) {
            this.letterGuessed = true;
            return;
        }
    }
}


module.exports = Letter;



