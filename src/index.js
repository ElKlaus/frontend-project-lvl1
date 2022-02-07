import readlineSync from 'readline-sync';

const getName = () => {
  const answer = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${answer}!`);

  return answer;
};

const sayHello = () => {
  console.log('Welcome to the Brain Games!');

  return getName();
};

const showQuestion = (quesExpression) => { // выводим вопрос на экран
  console.log(`Question: ${quesExpression}`);

  return quesExpression;
};

const getAnswer = () => readlineSync.question('Your answer: '); // сохраняем ответ

const checkAnswer = (ans, checkPrd) => {
  const res = String(checkPrd) === String(ans); // проверяем ответ

  return res;
};

const randomNumber = (from, to) => Math.floor(((Math.random() * to) + from));

const startGame = (genRules, questProp) => {
  let tryCount = 0;
  let rightAnsCount = 0;

  const userName = sayHello();

  for (;tryCount !== 4;) {
    if (rightAnsCount === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    if (tryCount === 0) {
      console.log(questProp);
    } else if (tryCount !== rightAnsCount) {
      return console.log(`Game over, ${userName}!`);
    }

    const generatedArr = genRules();

    showQuestion(generatedArr[0]);
    // Выводим вопрос и сохраняем в переменную для функции сверки

    const rightAnswer = generatedArr[1];
    // Получаем верный ответ

    const userAnswer = getAnswer();
    // выводим предложение для ввода ответа и сохраняем для сверки в переменную

    const checkResult = checkAnswer(userAnswer, rightAnswer);
    // сверяем ответ пользователя с верным ответом

    tryCount += 1;

    if (checkResult) {
      rightAnsCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer, Baddy ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  return false;
};

export {
  sayHello, randomNumber, startGame,
};
