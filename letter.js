// var splitRandomWord = [ 'i', 'n', 'f', 'o', 'r', 'm', 'a', 't', 'i', 'o', 'n' ]

// wordPlaceHolder = function () {
//     for (var i = 0; i < splitRandomWord.length; i++) {
//         var letter = new Letter(splitRandomWord[i]);
//         console.log(letter.letter)
//         console.log(letter.guessedRightLetter)
//         console.log(letter.showRightLetter())
//     };
// }

function Letter(letterInWord) {
    this.letter = letterInWord;
    this.guessedRightLetter = false;

    this.showRightLetter = function (pass) {
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

// wordPlaceHolder()