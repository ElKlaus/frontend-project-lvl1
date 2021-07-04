#!/usr/bin/env node
import { sayHello } from '.././brain-games.js';
import { showQuestion, getAnswer, checkAnswer, randomNumber } from '.././index.js';

const userName = sayHello();

const startGame = (tryCount = 0, rightAnstryCount = 0) => {

    if (rightAnstryCount === 3) {
        return console.log(`Congratulations, ${userName}!`);
    } else if (tryCount === 0) {
        console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
    } else if (tryCount === 3 && rightAnstryCount !== 3) {
        return console.log(`Game over, ${userName}!`);
    }

    const genQustExpres = () => { //Генерация выражения для вопроса к игроку
        const resArr = [];

        const checkPrime = (num) => {
            let count = 2;
          
            while (count < num) {
              if (num % count) {
                count += 1;
              } else return false;
            }
          
            return true;
        };          

        const expression = randomNumber(1, 1000);
        const rightAnswer = checkPrime(expression) ? 'yes' : 'no';

        resArr.push(expression);
        resArr.push(rightAnswer);

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