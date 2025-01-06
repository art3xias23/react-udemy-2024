import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx';


export default function Quiz({userAnswers, setUserAnswers}){

    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer= useCallback(    function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    })

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

     return (
    <div id="quiz">
    <div id="question">
        <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2> 

        <ul id="answers">
            {shuffledAnswers.map((answer) => 
        <li key={answer} className="answer"><button onClick={() => handleSelectAnswer(answer)}>{answer}</button></li>)}
        </ul>
    </div>
    </div>)
}