import {useState} from 'react';


export default function Gameboard({onSelectSquare, board}) {


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
        {board.map((row, index) => 
        <li key={index}>
            <ol>
                {console.log("Row:")}
                {console.log(row)}
                {row.map((col, colIndex) => <li key={colIndex}><button onClick={() => onSelectSquare(index, colIndex)}>{board[index][colIndex]}</button></li>)}
            </ol>
        </li>
        )}
    </ol>)
}