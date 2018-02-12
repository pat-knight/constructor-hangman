// modules
var inquirer = require("inquirer");

//externals
const Word = require("./word.js");

let words = ["Marty McFly", "Dr. Emmett Brown", "Marvin Berry", "Biff Tannen", "Jennifer",
    "Great Scott!", "This is heavy", "What are you looking at butthead?", "I hate manure!",
    "DeLorean", "Gray's Sports Almanac", "Manure"
];
let guesses = 10;
let wordSelect;
let currentWord;
let incorrect = [];
let letterbank = [];
let unfinished;


const begin = function () {
    guesses = 10;
    incorrect = [];
    letterbank = [];
    inquirer.prompt([{
        name: 'start',
        message: 'Start game?',
        type: 'confirm'
    }]).then((ans) => {
        if (ans.start) {
            process.stdout.write('\x1B[2J\x1B[0f');
            console.log('~~~~Welcome to Back to the Future Hangman~~~~');
            console.log('~~~~Use your keyboard to guess popular   ~~~~');
            console.log('~~~~Characters, phrases and objects from ~~~~');
            console.log('~~~~The Back to the Future franchise     ~~~~');
            wordSelect = words[Math.floor(Math.random() * words.length)];
            // currentWord = new Word(wordSelect.toUpperCase());
            // console.log(wordSelect);
            // console.log(currentWord);
            start();
        } else {
            begin();
        }
    })

    
} //close begin

const start = function () {
    currentWord = new Word(wordSelect.toUpperCase());

    inquirer.prompt(
        [{
            name: 'guess',
            message: '\nGuess a letter',
            type: 'input',
            validate: function (guessed) {
                if (guessed.match(/^([a-zA-Z-]){1}$/)) {
                    gameplay(currentWord, guessed);
                    return;
                } else {
                    return 'Please enter a valid letter';
                }
            }
        }])
} //close start



const gameplay = function (currentWord, guessed) {
    currentWord.check(guessed.toUpperCase());
    currentWord.visible(guessed);
    unfinished = currentWord.visible();
    if (!unfinished.includes('_')) {
        win();
    } else {
        console.log(`\n ${unfinished} \n`);
        checkLetter(guessed);
    }
} //close gameplay

const checkLetter = function (guessed) {
    if (letterbank.includes(guessed.toUpperCase())) {
        console.log('Letter already guessed');
        console.log(`\n 
                Incorrect guesses: ${incorrect} \n
                Guesses left: ${guesses} \n
            `);
    } else if (unfinished.includes(guessed.toUpperCase())) {
        console.log(`\n Correct! \n`);
        letterbank.push(guessed.toUpperCase());
        console.log(`\n 
            Incorrect guesses: ${incorrect} \n
            Guesses left: ${guesses} \n
        `);
    } else {
        guesses--;
        console.log(`\n Incorrect! \n`);
        letterbank.push(guessed.toUpperCase());
        incorrect.push(guessed.toUpperCase());
        console.log(`\n 
            Incorrect guesses: ${incorrect} \n
            Guesses left: ${guesses} \n
        `);
        // if (guesses = 0) {
        //     lose();
        // }
    }
} //close checkLetter

const win = function () {
    console.log(`\n You Win! \n`);
    console.log(` The correct answer was ${wordSelect}`);
    newGame();
}

const lose = function () {
    console.log(`\n Sorry, you lost. The correct answer was ${wordSelect}`);
    newgame();
}

const newGame = function () {
    begin();
    // inquirer.prompt(
    //     [{
    //         name: 'again',
    //         message: '\n Would you like to play again?',
    //         type: 'confirm'
    //     }]).then(ans => {
    //     if (ans.again) {
    //         begin();
    //     } else {
    //         console.log('goodbye');
    //         process.stdout.write('\x1B[2J\x1B[0f');
    //     }

    // })
}//close newGame


begin();