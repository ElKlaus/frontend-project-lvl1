import {
  randomNumber, startGame,
} from './index.js';

const brainEvenQuestion = 'What number is missing in the progression?';

const brainProgressionRules = () => {
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

const brainProgression = () => startGame(brainProgressionRules, brainEvenQuestion);

export default brainProgression;
