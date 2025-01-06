import Header from "./components/Header";
import Quiz from "./components/Quiz";
import {useState} from 'react';
import Summary from "./components/Summary";
import QUESTIONS from "./questions";

function App() {
    const [userAnswers, setUserAnswers] = useState([]);
    

    return <>
        <Header />
        <main>
            {QUESTIONS.length === userAnswers.length ?
       <Summary userAnswers={userAnswers} /> 
       : 
            <Quiz userAnswers={userAnswers} setUserAnswers={setUserAnswers} />}
        </main>
    </>

}

export default App;
