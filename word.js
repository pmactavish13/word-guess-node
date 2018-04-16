var Letter = require("./letter.js")

var Word = function (randomWord) {
    var randomWord = "HOW"
    this.randomWord = randomWord;
    console.log(this.randomWord + " Word");
    this.splitRandomWord = randomWord.split("");
    console.log(this.splitRandomWord);
    this.letterArray = [];
    this.guessState = "";

    // constructs an object for each letter
    for (var i = 0; i < this.splitRandomWord.length; i++) {
        var eachLetterObject = "";
        eachLetterObject = new Letter(this.splitRandomWord[i]);
        this.letterArray.push(eachLetterObject);
        console.log(letterArray.length)
    };

    this.wordPlaceHolder = function() {
        var letterUnderscore = "";
        for (var i = 0; i < this.letterArray.length; i++) {
            letterUnderscore += letterArray[i].showRightLetter();
        };
        this.guessState=letterUnderscore;
        console.log(this.guessState + "\n");
    };

    this.guess = function (letterGuessed) {
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].checkLetter(letterGuessed);
        }
    };
wordPlaceHolder()
var letterH = "H"
guess(letterH)
wordPlaceHolder()
var letterO ="O"
guess(letterO)
wordPlaceHolder()
var letterW ="W"
guess(letterW)
wordPlaceHolder()
};

module.exports = Word
Word()
