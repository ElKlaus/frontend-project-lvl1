import {
  randomNumber, startGame,
} from './index.js';

const brainPrimeRules = () => { // Генерация выражения для вопроса к игроку
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

const brainPrime = () => startGame(brainPrimeRules);

export default brainPrime;
