var randomWord = require('random-words');

function RandomWord() {
    this.randomWord = randomWord();
};

module.exports = RandomWord;