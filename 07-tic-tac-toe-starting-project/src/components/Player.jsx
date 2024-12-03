import {useState} from 'react';
export default function Player({initialName, symbol}){
   const [isEditing, setIsEditing] =  useState(false)
   const [playerName, setPlayerName] = useState(initialName);
return (<li>
            <span className="player">
              {isEditing ? <input required value={playerName} onChange={(evt) => setPlayerName(evt.target.value)} /> : <span className="player-name">{playerName}</span>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEditing((editing) => !editing )}>{isEditing ? "Save" : "Edit"}</button>
          </li>)
}