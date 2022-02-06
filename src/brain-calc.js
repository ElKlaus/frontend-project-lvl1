import {
  startGame,
} from './index.js';

const brainCalcRules = () => { // Генерация выражения для вопроса к игроку
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

const brainCalc = () => startGame(brainCalcRules);

export default brainCalc;
