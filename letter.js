var splitRandomWord = [ 'i', 'n', 'f', 'o', 'r', 'm', 'a', 't', 'i', 'o', 'n' ]
var letterGuessed = "n"


function guess() {
    var trueFalseSpace = [];
    for (var i = 0; i < splitRandomWord.length; i++) {
        trueFalseSpace += new Letter(splitRandomWord[i]).checkLetter(letterGuessed);
    };
        console.log("**************************")
        trueFalse = trueFalseSpace.trim()
        var trueFalseArray = trueFalse.split(" ");
        console.log(trueFalseArray)
        console.log(trueFalseArray.length)
        if (trueFalseArray.length = splitRandomWord.length) {
        
        }
    };

wordPlaceHolder = function () {
    var letterUnderscore = "";
    for (var i = 0; i < splitRandomWord.length; i++) {
        var checkIfLetter = new Letter(splitRandomWord[i])
        //check.showRightLetter()
        //letterUnderscore += new Letter(splitRandomWord[i]).showRightLetter();
        //var letter = new Letter(splitRandomWord[i]);
        // console.log(letter.letter)
       // console.log(letter.guessedRightLetter)
        //console.log(letter.showRightLetter())
    };
    console.log(letterUnderscore)
}



function Letter(letter, letterGuessed) {
    this.letter = letter;
    this.guessedRightLetter = false;

    this.showRightLetter = function (pass) {
        if (this.guessedRightLetter === true) {
            return this.letter + " ";
        } else {
            return "_ ";
        };
       
    };
    this.checkLetter = function (letterGuessed) {
        if (letterGuessed.toUpperCase() === this.letter.toUpperCase()) {
            this.guessedRightLetter = true;
            return this.guessedRightLetter + " "
        } else {
            return false + " "
        }
    };
};


module.exports = Letter;

//wordPlaceHolder()
guess()