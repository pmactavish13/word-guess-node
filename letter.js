var Letter = function(letter) {
    this.letter = letter;
    this.beenGuessed = false;

    this.showRightLetter = function () {
        if (this.beenGuessed === true) {
            return this.letter + " ";
        } else {
            return "_ ";
        };

    };
    this.checkLetter = function (letterGuessed) {
        if (letterGuessed.toUpperCase() === this.letter.toUpperCase()) {
            this.beenGuessed = true
        } 
    };
};

module.exports = Letter;
