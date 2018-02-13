// import { setTimeout } from "timers";

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
var currentWord;
var incorrect = [];
var letterbank = [];
var unfinished;


const begin = function () {
    inquirer.prompt([{
        name: 'start',
        message: 'Start game?',
        type: 'confirm'
    }]).then((ans) => {
        if (ans.start) {
            process.stdout.write('\x1B[2J\x1B[0f');
            console.log('~~~~ Welcome to Back to the Future Hangman ~~~~');
            console.log('~~~~ Use your keyboard to guess popular    ~~~~');
            console.log('~~~~ Characters, phrases and objects from  ~~~~');
            console.log('~~~~   The Back to the Future franchise    ~~~~');
            wordSelect = words[Math.floor(Math.random() * words.length)];
            start(wordSelect);
        } else {
            process.stdout.write('\x1B[2J\x1B[0f');            
        }
    })

    
} //close begin

const start = function (wordSelect) {
    currentWord = new Word(wordSelect.toUpperCase());

    inquirer.prompt(
        [{
            name: 'guess',
            message: '\nGuess a letter',
            type: 'input',
            validate: function (guessed) {
                if (guessed.match(/^([a-zA-Z-]){1}$/)) {
                    gameplay(currentWord, guessed, wordSelect);
                    return;
                } else {
                    return 'Please enter a valid letter';
                }
            }
        }])
} //close start



const gameplay = function (currentWord, guessed, wordSelect) {
    currentWord.check(guessed.toUpperCase());
    currentWord.visible(guessed);
    unfinished = currentWord.visible();
    if (!unfinished.includes('_')) {
        win(wordSelect);
    } else {
        console.log(`\n ${unfinished} \n`);
        checkLetter(guessed, wordSelect);
    }
} //close gameplay

const checkLetter = function (guessed, wordSelect) {
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
        if (guesses === 0) {
            console.log('\nSorry you lost.')
            console.log(' \nGame will exit in 5 seconds. ')
            lose(wordSelect);
        }
    }
} //close checkLetter

const win = function (wordSelect) {
    console.log(` \nGame will exit in 5 seconds \n You Win! \nThe correct answer was '${wordSelect}.'`);
    setTimeout( function () {
        process.exit();
    }, 5000);
}//close win

const lose = function (wordSelect) {
    console.log(`\nThe correct answer was ${wordSelect}`);
    setTimeout( function () {
        process.exit();
    }, 5000);
}// close lose

begin();