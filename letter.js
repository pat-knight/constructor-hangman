function Letter(char) {
    this.char = char;
    this.guessed = false;
}

Letter.prototype.compare = function (char) {
    if (this.char === char) {
        this.guessed = true;
    }
} //close compare 

Letter.prototype.show = function () { //which character user sees
    if (this.char === ' ' || this.char === '.' || this.char === '-' || this.char === "'") {
        return this.char;
    } else if (this.guessed) {
        return this.char;
    } else {
        return '_'
    }
}; //close show

module.exports = Letter;