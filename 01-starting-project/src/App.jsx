import Header from './components/Header';
import UserInput from './components/UserInput';
import {useState} from 'react'
import { calculateInvestmentResults } from './util/investment';
import Grid from './components/Grid';
function App() {

  const[investment, setInvestment] = useState({
    initialInvestment: 10_000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration:10 
});

const [calculated, setCalculated] = useState([{
  year:0,
  interest:0.0, 
  valueEndOfYear:0.0,
  annualInvestment:0.0
}]);

function calculateInvestment(investment){
  var result = calculateInvestmentResults(investment);
  return result;
}

function handleUpdateInvestment(id, newValue){
  console.log(`id: ${id}`)
  setInvestment((oldValue) => {
    const updated = {...oldValue, [id]:Number(newValue)}
      setCalculated(calculated=>calculateInvestment(updated));
      return updated;
  })
}


  
  return (
    <>
      <Header />
      <UserInput investment={investment}  onChanged={handleUpdateInvestment} />
      <Grid investments={calculated} />
    </>
  )
}

export default App
