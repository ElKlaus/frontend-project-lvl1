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

  const genQustExpres = () => { // Генерация выражения для вопроса к игроку
    const genOperationNumb = Math.floor((Math.random() * 3) + 1);
    const firsPredicat = Math.floor((Math.random() * 100) + 1);
    const secondPredicat = Math.floor((Math.random() * 100) + 1);
    const resArr = [];

    let expression = '';
    let calcResult = 0;

    if (genOperationNumb === 1) {
      expression = `${firsPredicat} * ${secondPredicat}`;
      calcResult = firsPredicat * secondPredicat;
    } else if (genOperationNumb === 2) {
      expression = `${firsPredicat} - ${secondPredicat}`;
      calcResult = firsPredicat - secondPredicat;
    } else if (genOperationNumb === 3) {
      expression = `${firsPredicat} + ${secondPredicat}`;
      calcResult = firsPredicat + secondPredicat;
    }

    resArr.push(expression);
    resArr.push(calcResult);

    return resArr;
  };

  const generatedArr = genQustExpres();

  showQuestion(generatedArr[0]);
  // Выводим вопрос и сохраняем в переменную для функции сверки

  const rightAnswer = generatedArr[1];
  // Получаем верный ответ

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
