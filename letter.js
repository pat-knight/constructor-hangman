function Letter(char) {
    this.char = char;
    this.guessed = false;
}

Letter.prototype.compare = function (char) {
    if (this.char === char) {
        return this.guessed = true;
    }
} //close compare 

Letter.prototype.charCorrect = function () {
    if (this.char === ' ' || this.char === '.' || this.char === '!' || this.char === "'" || this.char === "?") {
        this.guessed = true;
    }
} //close compare 

Letter.prototype.show = function () { //which character user sees
    if (this.char === ' ' || this.char === '.' || this.char === '!' || this.char === "'" || this.char === "?") {
        return this.char;
        this.guessed = true;
    } else if (this.guessed === true) {
        return this.char;
    } else {
        return '_'
        console.log('unguessed')
    }
}; //close show

module.exports = Letter;