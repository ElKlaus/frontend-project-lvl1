import {
  startGame,
} from './index.js';

const brainEvenRules = () => { // Генерация выражения для вопроса к игроку
  const calcResult = Math.floor((Math.random() * 1000) + 1);
  const expression = (calcResult % 2 === 0 ? 'yes' : 'no');
  const resArr = [];

  resArr.push(calcResult);
  resArr.push(expression);

  return resArr;
};

const brainEven = () => startGame(brainEvenRules);

export default brainEven;
