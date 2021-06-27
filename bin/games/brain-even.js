#!/usr/bin/env node
import readlineSync from 'readline-sync';
import  { sayHello } from '.././brain-games.js';

const showQuestion = () => {
    const randNumb = Math.floor((Math.random() * 1000) + 1);

    console.log(`Question: ${randNumb}`);

    return randNumb;
}

const getAnswer = () => readlineSync.question(`Your answer: `);



const checkAnswer = (qust, ans) => {
    const checkEven = (qust % 2 === 0 ? true : false);

    if ((checkEven && ans === 'yes') || (!checkEven && ans === 'no')) {
        return true
    } else return false;
};

const startGame = (count = 0) => {
    // const userName = sayHello();

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