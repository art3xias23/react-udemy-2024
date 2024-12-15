export default function GameOver({symbol}){
    return (<div id="game-over">
        <h2>Game Over!</h2>

        <p>{symbol && <p>{symbol} won</p>}</p>
        <p>{!symbol && <p>It's a draw</p>}</p>
        <button>Rematch</button>
    </div>)
}