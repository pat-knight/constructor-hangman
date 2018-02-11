// modules
var inquirer = require("inquirer");

//externals
const Word = require("./word.js");

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
            console.log(wordSelect);
            start();
        } else {
            begin();
        }
    })
}//close begin

const start = function () {
    currentWord = new Word(wordSelect.toUpperCase());
    
    console.log(currentWord);
    inquirer.prompt(
    [{
        name: 'guess',
        message: '\nGuess a letter',
        type: 'input',
        validate: function(guessed) {
            if (guessed.match(/^([a-zA-Z-]){1}$/)) {
                gameplay(currentWord, guessed);
                return;
            } else {
                return 'Please enter a valid letter';
            }
        }
    }])
}//close start



const gameplay = function (currentWord, guessed) {
    console.log(`\n${guessed} guessed`);
    currentWord.check(guessed.toUpperCase());
    currentWord.visible(guessed);
    console.log(currentWord.visible);
    let unfinished = currentWord.visible();
    console.log(unfinished);
    if (unfinished.includes(guessed)){
        console.log(`\n Correct! \n`);
    } else {
        console.log(`\n Incorrect! \n`);
    }

    // currentWord.characters.forEach(i => {
    //     if (guessed === i.)
    // })
}

begin();