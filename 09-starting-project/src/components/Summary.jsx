import img from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function Summary({ userAnswers }) {

    return (
        <div id="summary">
            <h2>Summary</h2>
            <img src={img} alt="some image" />
            {QUESTIONS.map((question, index) => 
                <div>
                    <h1>{question.text}</h1>
                   {question.answers.map((answer) => 
                        <ol>
                            <li key={answer} className={
                                (userAnswers[index] == answer ? 'user-answer' : '') +
                                (question.answers[0] == answer ?  ' correct' : ' wrong')
                                }> {answer} </li>
                        </ol>
                   )} 
                </div>
            )}
        </div>
    )
}