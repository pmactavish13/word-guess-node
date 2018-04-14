var Letter = require("./letter.js")

function Word(randomWord) {
    this.randomWord = randomWord
    console.log(this.randomWord + " Word")
    this.splitRandomWord = randomWord.split("")
    console.log(this.splitRandomWord)
   
    this.wordPlaceHolder = function () {
        var letterUnderscore = ""; 
            for (var i = 0; i < this.splitRandomWord.length; i++) {
                letterUnderscore += new Letter(this.splitRandomWord[i]).showRightLetter();
            };
        console.log(letterUnderscore)
    };


    this.guess = function (letterGuessed) {
        for (var i = 0; i < this.splitRandomWord.length; i++) {
            this.splitRandomWord[i].checkLetter(letterGuessed);
        };
        console.log(this.guess)
    };
};

module.exports = Word
