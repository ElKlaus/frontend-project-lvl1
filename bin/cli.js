import readlineSync from 'readline-sync';

const getName = () => {
    const answer = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${answer}!`);
};

export { getName };