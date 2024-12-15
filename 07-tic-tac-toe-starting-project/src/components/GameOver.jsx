export default function GameOver({symbol, onRestart}){
    return (<div id="game-over">
        <h2>Game Over!</h2>

        <p>{symbol && <p>{symbol} won</p>}</p>
        <p>{!symbol && <p>It's a draw</p>}</p>
        <button onClick={onRestart}>Rematch</button>
    </div>)
}