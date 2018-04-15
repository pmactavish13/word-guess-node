var Letter = require("./letter.js")

function Word(randomWord) {
    this.randomWord = randomWord
    console.log(this.randomWord + " Word")
    this.splitRandomWord = randomWord.split("")
    console.log(this.splitRandomWord)
    
    this.guess = function (letterGuessed) {
        console.log(this.guess + " Word")
        for (var i = 0; i < this.splitRandomWord.length; i++) {
            this.splitRandomWord[i].checkLetter(letterGuessed);
    
        };
        console.log(this.guess +"guess")
    };
    
    this.wordPlaceHolder = function () {
        var letterUnderscore = "";
        for (var i = 0; i < this.splitRandomWord.length; i++) {
            letterUnderscore += new Letter(this.splitRandomWord[i]).showRightLetter();
        };
        console.log(letterUnderscore + "placeHolder\n")
    };




};

module.exports = Word
