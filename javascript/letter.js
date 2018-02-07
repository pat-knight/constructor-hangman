// dependency for inquirer npm package
const input = process.argv[2];
//letter constructor

function Letter(input) {
    this.character = input;
    this.guessed = guessed;
    this.display = function () {
        if (!this.guessed) {
            return '_';
        } else {
            return this.character;
        }
        this.compare = function (input) {
            if (this.character === input) {
                this.guessed = true;
            }
        }
    }
} // close Letter constructor

module.exports = {
    Letter:Letter
};

