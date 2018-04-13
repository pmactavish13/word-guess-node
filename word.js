var letter = require("./letter.js")
var randomWord = require("./randomWord.js")

function Word(randomWord) {
    console.log("hi")
    this.randomWord = function(){
        new RandomWords();
    }
}   
function shit(){
    this.splitRandomWord = randomWord.split("");
    this.wordPlaceHolder = function (underscore) {
        for (var i = 0; i < this.splitRandomWord.length; i++) {
            return newLetter(this.splitRandomWord[i]);
        };
    };

    this.guess = function (letterGuessed) {
        for (var i = 0; i < this.splitRandomWord.length; i++) {
            this.splitRandomWord[i].checkLetter(letterGuessed);
        };
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
