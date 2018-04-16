var Letter = require("./letter.js");

var Word = function (randomWord) {
    this.randomWord = randomWord.toUpperCase();
    this.splitRandomWord = this.randomWord.split("");
    this.letterArray = [];
    this.guessState = "";

    // constructs an object for each letter
    for (var i = 0; i < this.splitRandomWord.length; i++) {
        var eachLetterObject = "";
        eachLetterObject = new Letter(this.splitRandomWord[i]);
        this.letterArray.push(eachLetterObject);

        this.wordPlaceHolder = function () {
            var letterUnderscore = "";
            for (var i = 0; i < this.letterArray.length; i++) {
                letterUnderscore += this.letterArray[i].showRightLetter();
            };
            this.guessState = letterUnderscore;
            console.log(this.guessState + "\n");
        };

        this.guess = function (letterGuessed) {
            for (var i = 0; i < this.letterArray.length; i++) {
                this.letterArray[i].checkLetter(letterGuessed);
            };
        };
    };
};

module.exports = Word;
