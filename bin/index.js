import readlineSync from 'readline-sync';

const showQuestion = (quesExpression) => { //выводим вопрос на экран

    console.log(`Question: ${quesExpression}`);

    return quesExpression;
}

const getAnswer = () => readlineSync.question(`Your answer: `);                         //сохраняем ответ
 
const checkAnswer = (ans, checkPrd) => String(checkPrd) === String(ans) ? true : false;           //проверяем ответ

export { showQuestion, getAnswer, checkAnswer };