const Letter = require('./letter.js');

function Word(word) {
    this.characters = word.split('').map(i => new Letter(i));

    this.visible = function () { //word displayed
        let visWord = [];
        this.characters.forEach(j => {
            visWord.push(j.show())
        });
        return visWord.join(' ');
    }

    this.check = function (char) {
        this.characters.forEach(k => {
            k.compare(char);
            k.charCorrect();
        })
    }
}; //close Word


module.exports = Word;