import {useState} from 'react';

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function Gameboard({onSelectSquare, turns}) {
 let gameBoard =  initialGameboard;  

 for(const turn of turns){
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
 }
//    const[gameBoard, setGameBoard] = useState(initialGameboard);
//    function handleSelectSquare(rowIndex, colIndex){
//     setGameBoard((prevGameBoard) => {
//         const updatedBoard = [...prevGameBoard.map((innerArray => [...innerArray]))];
//        updatedBoard[rowIndex][colIndex] = symbol; 
//        return updatedBoard;
//     });

//     onSelectSquare();
//    }

    return(<ol id="game-board">
        {gameBoard.map((row, index) => 
        <li key={index}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => onSelectSquare(index, colIndex)}>{playerSymbol}</button></li>)}
            </ol>
        </li>
        )}
    </ol>)
}