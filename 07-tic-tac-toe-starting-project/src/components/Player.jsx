import {useState} from 'react';
export default function Player({initialName, symbol, isActive}){
   const [isEditing, setIsEditing] =  useState(false)
   const [playerName, setPlayerName] = useState(initialName);
return (<li className={isActive? 'active' : undefined}>
            <span className="player">
              {isEditing ? <input required value={playerName} onChange={(evt) => setPlayerName(evt.target.value)} /> : <span className="player-name">{playerName}</span>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEditing((editing) => !editing )}>{isEditing ? "Save" : "Edit"}</button>
          </li>)
}