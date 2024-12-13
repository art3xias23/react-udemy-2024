const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
export default function Gameboard() {
    return(<ol id="game-board">
        {initialGameboard.map((row, index) => 
        <li key={index}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}><button>{playerSymbol}</button></li>)}
            </ol>
        </li>
        )}
    </ol>)
}