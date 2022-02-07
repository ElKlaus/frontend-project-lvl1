import {
  startGame,
} from './index.js';

const brainGsdQuestion = 'Find the greatest common divisor of given numbers.';

const brainGcdRules = () => { // Генерация выражения для вопроса к игроку
  const firsPredicat = Math.floor((Math.random() * 100) + 1);
  const secondPredicat = Math.floor((Math.random() * 100) + 1);
  const expression = `${firsPredicat} ${secondPredicat}`;
  const resArr = [];
  const iter = (arg1, arg2) => (arg2 === 0 ? arg1 : iter(arg2, arg1 % arg2));
  const calcResult = iter(firsPredicat, secondPredicat);

  resArr.push(expression);
  resArr.push(calcResult);

  return resArr;
};

const brainGcd = () => startGame(brainGcdRules, brainGsdQuestion);

export default brainGcd;
