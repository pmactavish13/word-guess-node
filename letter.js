var Letter = function(letter) {
    this.letter = letter;
    this.beenGuessed = false;

    // shows underscores or letters that have been guessed
    this.showRightLetter = function () {
        if (this.beenGuessed === true) {
            return this.letter + " ";
        } else {
            return "_ ";
        };
    };

    // boolean check to see in letter has already been entered
    this.checkLetter = function (letterGuessed) {
        if (letterGuessed.toUpperCase() === this.letter.toUpperCase()) {
            this.beenGuessed = true;
        }; 
    };
};

module.exports = Letter;