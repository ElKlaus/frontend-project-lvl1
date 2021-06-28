import readlineSync from 'readline-sync';

const showQuestion = () => {
    const randNumb = Math.floor((Math.random() * 1000) + 1);

    console.log(`Question: ${randNumb}`);

    return randNumb;
}

const getAnswer = () => readlineSync.question(`Your answer: `);

const checkAnswer = (qust, ans) => {
    const checkEven = (qust % 2 === 0 ? true : false);

    if ((checkEven && ans === 'yes') || (!checkEven && ans === 'no')) {
        return true
    } else return false;
};

export { showQuestion, getAnswer, checkAnswer };