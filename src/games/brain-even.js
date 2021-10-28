import {
  showQuestion, getAnswer, checkAnswer, sayHello,
} from '../index.js';

const userName = sayHello();

const startGame = (tryCount = 0, rightAnstryCount = 0) => {
  let changeTryCount = tryCount;
  let changeRightAnstryCount = rightAnstryCount;

  if (rightAnstryCount === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }

  if (tryCount === 0) {
    console.log('What is the result of the expression?');
  } else if (tryCount === 3 && rightAnstryCount !== 3) {
    return console.log(`Game over, ${userName}!`);
  }

  const genQustExpres = Math.floor((Math.random() * 1000) + 1);
  // Генерация выражения для вопроса к игроку

  const qustNumb = showQuestion(genQustExpres);
  // Выводим вопрос и сохраняем в переменную для функции сверки

  const rightAnswer = (qustNumb % 2 === 0 ? 'yes' : 'no'); // Получаем верный ответ

  const userAnswer = getAnswer();
  // выводим предложение для ввода ответа и сохраняем для сверки в переменную

  const checkResult = checkAnswer(userAnswer, rightAnswer);
  // сверяем ответ пользователя с верным ответом

  changeTryCount += 1;

  if (checkResult) {
    changeRightAnstryCount += 1;
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  }

  return startGame(changeTryCount, changeRightAnstryCount);
};

export default startGame;
