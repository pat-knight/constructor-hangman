const Letter = require('./letter.js');

function Word(word) {
    this.characters = [];
    for (let letter of word) { //add each letter to array characters
        this.characters.push(new Letter(letter));
    }
    this.visible = function () { //word displayed
        let charArr = this.characters.map(function (letter) {
            letter.show().join(' ');
        });
        return charArr;
    }
    this.check = function (char) {
        this.characters.forEach(x => {
            x.compare(char)
        })
        this.visible();
    }
}; //close Word


module.exports = Word;