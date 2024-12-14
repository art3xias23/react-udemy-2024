import Player from './components/Player'
import Gameboard from './components/Gameboard'

import {useState} from 'react';
import Log from './components/Log';

function App() {
  const[gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((currentlyActivePlayer) => currentlyActivePlayer === 'X' ? 'O' : 'X' );

    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player=== 'X'){
        currentPlayer = 'O';
      }
      const updatedTurns = [{square: {row: rowIndex, col: colIndex},player:activePlayer},...prevTurns,]

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
        <Gameboard onSelectSquare={handleSelectSquare} 
        turns = {gameTurns}/>
      </div>
      <Log turns={gameTurns} />
    </main >

  )
}

export default App
