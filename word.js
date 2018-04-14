var letter = require("./letter.js")

function Word(randomWord) {
    this.randomWord = randomWord
    console.log(this.randomWord + " Word")
    this.splitRandomWord = randomWord.split("")
    console.log(this.splitRandomWord)
    this.wordPlaceHolder = function (underscore) {
        for (var i = 0; i < this.splitRandomWord.length; i++) {
            letter = new Letter(this.splitRandomWord[i]);
            console.log(wordPlaceHolder)
        };
        console.log(this.wordPlaceHolder)
    };

    this.guess = function (letterGuessed) {
        for (var i = 0; i < this.splitRandomWord.length; i++) {
            this.splitRandomWord[i].checkLetter(letterGuessed);
        };
        console.log(this.guess)
    };

    this.returnRandomWordToString = function () {
        stringRandomWord = "";
        for (var i = 0; i < this.splitRandomWord.length; i++) {
            stringRandomWord += this.splitRandomWord[i].showRightLetter();
        };
        console.log(stringRandomWord);
    };
};
module.exports = Word
