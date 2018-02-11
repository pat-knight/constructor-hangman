// modules
var inquirer = require("inquirer");

//externals
const word = require("./word.js");

let words = ["Marty McFly", "Dr. Emmett Brown", "Marvin Berry", "Biff Tannen", "Jennifer",
    "Great Scott!", "This is heavy", "What are you looking at butthead", "I hate manure!",
    "DeLorean", "Gray's Sports Almanac", "Manure" ];
let guesses = 10;
let wordSelect;
let currentWord;
let correct = [];


const begin = function () {
    inquirer.prompt([
        {
            name: 'start',
            message: 'Start game?',
            type: 'confirm'
        }
    ]).then((ans) => {
        if (ans.start) {
            wordSelect = words[Math.floor(Math.random() * words.length)];
            start();
        } else {
            reset();
        }
    })
}//close begin

const start = function () {
    currentWord = new Word(wordSelect.toUpperCase());
    [{
        name: 'guess',
        message: 'Guess a letter',
        type: 'input',
        validate: function(guessed) {
            guessed.toUpperCase();
            if (guessed.match(/^([A-Z])/)) {
                return;
            } else {
                return 'Please enter a valid letter';
            }
        }
    }]
}//close start