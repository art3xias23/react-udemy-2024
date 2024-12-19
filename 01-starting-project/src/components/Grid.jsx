import { formatter } from "../util/investment"
export default function Grid({ investments }){
    console.log("Grid")
    console.log(investments)

    function calculateInterest(investment, years, interest){
        console.log(`investment: ${investment}`)
        console.log(`years: ${years}`)
        console.log(`interest: ${interest}`)
var        result=  investment * years * interest;
console.log(`result for ${years} : ${result}`);

return result
    }
    return(
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
        {investments && investments.map((investment) => 
            <tr>
                <td>{investment.year}</td>
                <td>{formatter.format(investment.valueEndOfYear)}</td>
                <td>{formatter.format(investment.interest)}</td>
                <td>{formatter.format(calculateInterest(investment.annualInvestment, investment.year, investment.interest))}</td>
                <td>{formatter.format(investment.annualInvestment)}</td>
            </tr>
        )}
        </tbody>
    </table>)
}