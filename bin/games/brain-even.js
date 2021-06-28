#!/usr/bin/env node
import { sayHello } from '.././brain-games.js';
import { showQuestion, getAnswer, checkAnswer } from '.././index.js';

const startGame = (count = 0) => {

    if (count === 3) {
        return console.log(`Congratulations, ${userName}!`);
    }

    const qustNumb = showQuestion();
    const ansVal = getAnswer();
    const checkResult = checkAnswer(qustNumb, ansVal);
    const correctAnswer = (ansVal === 'yes' ? 'no' : 'yes');

    if(checkResult) {
        count += 1;
        console.log('Correct!');
    } else {
        count = 0;
        console.log(`'${ansVal}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }

    return startGame(count);
};

const userName = sayHello();
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
startGame();