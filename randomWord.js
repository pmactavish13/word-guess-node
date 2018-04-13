var randomWord = require('random-words');

var RandomWords = function(randomWords) {
    console.log("randomWords.js");
    
    this.getRandomWords = function() {
        randomWords();
        console.log(randomWords());
        if (err) {
            console.log("No word was chosen");
          };   
    };
};

module.exports = RandomWords;