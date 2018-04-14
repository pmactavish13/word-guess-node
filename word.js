var Letter = require("./letter.js")

function Word(randomWord) {
    this.randomWord = randomWord
    console.log(this.randomWord + " Word")
    this.splitRandomWord = randomWord.split("")
    console.log(this.splitRandomWord)
   
    this.wordPlaceHolder = function () {
        for (var i = 0; i < this.splitRandomWord.length; i++) {
            var letter = new Letter(this.splitRandomWord[i]);
            console.log(letter)
           // var underscore = letter.showRightLetter
            //console.log(underscore + "underscore")
        };
    };

    this.guess = function (letterGuessed) {
        for (var i = 0; i < this.splitRandomWord.length; i++) {
            this.splitRandomWord[i].checkLetter(letterGuessed);
        };
        console.log(this.guess)
    };

    this.toString = function () {
        toString = "";
        for (var i = 0; i < this.splitRandomWord.length; i++) {
            toString += this.splitRandomWord[i].showRightLetter();
        };
        console.log(stringRandomWord);
    };
};
module.exports = Word
