import {useState} from 'react';
export default function Player({initialName, symbol, isActive, onChangeName}){
   const [isEditing, setIsEditing] =  useState(false)
   const [playerName, setPlayerName] = useState(initialName);

function handleEditClick(){
  setIsEditing((oldValue) => !oldValue);
  console.log('Changing name to');
  console.log(playerName)
  onChangeName(symbol, playerName);

}
return (<li className={isActive? 'active' : undefined}>
            <span className="player">
              {isEditing ? <input required value={playerName} onChange={(evt) => setPlayerName(evt.target.value)} /> : <span className="player-name">{playerName}</span>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
          </li>)
}