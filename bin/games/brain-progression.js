#!/usr/bin/env node
import { sayHello } from '.././brain-games.js';
import { showQuestion, getAnswer, checkAnswer, randomNumber } from '.././index.js';

const userName = sayHello();

const startGame = (tryCount = 0, rightAnstryCount = 0) => {

    if (rightAnstryCount === 3) {
        return console.log(`Congratulations, ${userName}!`);
    } else if (tryCount === 0) {
        console.log(`What number is missing in the progression?`);
    } else if (tryCount === 3 && rightAnstryCount !== 3) {
        return console.log(`Game over, ${userName}!`);
    }

    const genQustExpres = () => { //Генерация выражения для вопроса к игроку
        const newProgression = () => {
            const res = [];
            const step = randomNumber(1, 100);
          
            res[0] = randomNumber(1, 100);
          
            const iterArr = (arg, count) => {
              if (count === arg) return res;
          
              res.push(res[count - 1] + step);
          
              return iterArr(arg, count + 1);
            };
          
            return iterArr(10, 1);
        };
        
        const expression = newProgression();
        const missedIndex = randomNumber(1, 10);
        const calcResult = `${expression.splice(missedIndex, 1, '..')}`;
        const resArr = [];


        resArr.push(expression);
        resArr.push(calcResult);

        return resArr;
    };




    const generatedArr = genQustExpres();



    showQuestion(generatedArr[0]); //Выводим вопрос и сохраняем в переменную для функции сверки

    const rightAnswer = generatedArr[1]; //Получаем верный ответ



    const userAnswer = getAnswer(); //выводим предложение для ввода ответа и сохраняем для сверки в переменную

    const checkResult = checkAnswer(userAnswer, rightAnswer); //сверяем ответ пользователя с верным ответом

    tryCount += 1;

    if(checkResult) {
        rightAnstryCount += 1;
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
    }

    return startGame(tryCount, rightAnstryCount);
};

startGame();