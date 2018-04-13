// goes through each letter in the word to see if guess matches letter
// no then _ logged
//yes then letter logged
function Letter(letterInWord) {
    this.letter = letterInWord;
    this.guessedRightLetter = false;

    this.showRightLetter = function () {
        if (this.guessedRightLetter === true) {
            return this.letter;
        } else {
            return "_ ";
        };
    };
    this.checkLetter = function (letterGuessed) {
        if (letterGuessed.toUpperCase() === this.letter.toUpperCase()) {
            this.guessedRightLetter = true;
        };

    };

};

module.exports = Letter;