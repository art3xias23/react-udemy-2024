export default function GameOver({symbol}){
    return (<div id="game-over">
        <h2>Game Over!</h2>

        <p>{symbol} won!</p>
        <button>Rematch</button>
    </div>)
}