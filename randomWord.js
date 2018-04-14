var randomWord = require('random-words');

function RandomWord() {
    this.randomWord = randomWord();
    return this.randomWord;
}

module.exports = RandomWord;