const Letter = require('./letter.js');

function Word(word) {
    this.characters = word.split('').map(i => new Letter(i));
    // for (let letter of word) { //add each letter to array characters
    //     this.characters.push(new Letter(letter));
    // }
    
    this.visible = function () { //word displayed
        let visWord = [];
        this.characters.forEach(j => {visWord.push(j.show())});
        // console.log(`log ${visWord.join(' ')}`)
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