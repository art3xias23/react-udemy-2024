import Player from './components/Player'
import { WINNING_COMBINATIONS } from './components/winning-combinations';
import Gameboard from './components/Gameboard'

import {useState} from 'react';
import Log from './components/Log';
const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

  function deriveActivePlayer(gameTurns){
      let currentPlayer = 'X';
      if(gameTurns.length > 0 && gameTurns[0].player=== 'X'){
        currentPlayer = 'O';
      }
      return currentPlayer;
  }

  
function App() {
  const[gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');
const activePlayer = deriveActivePlayer(gameTurns);

let gameBoard = initialGameboard;
for(const turn of gameTurns){
  const {square, player} = turn;
  const {row, col} = square;
  gameBoard[row][col] = player;
}

let winner = null;
// console.log("Winning");
// console.log(WINNING_COMBINATIONS);
for(const combination of  WINNING_COMBINATIONS){
  // console.log("Comb:");
  // console.log(combination);
  // console.log("Gameboard");
  // console.log(gameBoard);
  // console.log("row");
  // console.log(combination[0].row);
  // console.log("col");
  // console.log(combination[0].col);
  console.log("col");
  console.log(combination[2].col);
  const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
  const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
  const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
  

  if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol &&  firstSquareSymbol===thirdSquareSymbol){
    winner = firstSquareSymbol;
  }
}

  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer((currentlyActivePlayer) => currentlyActivePlayer === 'X' ? 'O' : 'X' );

    if(gameTurns.some(turn => turn.square.row === rowIndex && turn.square.col === colIndex)){
      alert('NO');
      return;
    }
    setGameTurns(prevTurns => {
    const currentPlayer = deriveActivePlayer(prevTurns);
    console.log("Turns");
    console.log(gameTurns);
      const updatedTurns = [{square: {row: rowIndex, col: colIndex},player:currentPlayer},...prevTurns,]

      return updatedTurns;
    })
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
       <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'} /> 
       <Player initialName="Player2" symbol="O" isActive={activePlayer === 'O'} /> 
        </ol>
        {winner && <p>You won! winner</p>}
        <Gameboard onSelectSquare={handleSelectSquare} 
        board = {gameBoard}
        turns = {gameTurns}/>
      </div>
      <Log turns={gameTurns} />
    </main >

  )
}

export default App
