function Letter(letterInWord) {
    this.letter = letterInWord;
    this.guessedRightLetter = false;

    this.showRightLetter = function (letterInWord) {
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