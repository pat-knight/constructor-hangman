var letter = require('letter.js');

function Word(word) {
    this.word = word;
    this.characters = [];
    // this.solved = false;
    this.letters = function () {
        for (var i = 0; i < word.length; i++){
            this.characters.push(new letter(this.word[i]));
        }
    }
    this.check = function (input) {
        //check
    }
}

module.exports = {
    Word: Word
}