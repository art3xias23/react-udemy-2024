export default function UserInput({investment, onChanged}){
        
    return(<>
    <div id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor='initial'>Initial Investment</label>
                <input name="initial"  type="number" value={investment.initialInvestment || 0} 
                onChange= { (evt)=>{onChanged("initialInvestment", evt.target.value)}}/>
            </p>
            <p>
                <label htmlFor="annual"type="number">Annuel Investment</label>
                <input name="annual" type="number" value={investment.annualInvestment || 0} 
                onChange= { (evt)=>{onChanged("annualInvestment", evt.target.value)}}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor='expected'>Expected Return</label>
                <input name="expected" type="number" value={investment.expectedReturn || 0} 
                onChange= { (evt)=>{onChanged("expectedReturn", evt.target.value)}}/>
            </p>
            <p>
                <label htmlFor="duration">Duration</label>
                <input name="duration" type="number" value={investment.duration || 0} 
                onChange= { (evt)=>{onChanged("duration", evt.target.value)}}/>
            </p>
        </div>
    </div>
    </>)
}