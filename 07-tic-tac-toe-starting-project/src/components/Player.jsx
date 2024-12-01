import {useState} from 'react';
export default function Player({name, symbol}){
   const [isEditing, setIsEditing] =  useState(false)
return (<li>
            <span className="player">
              {isEditing ? <input value={name} /> : <span className="player-name">{name}</span>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEditing((editing) => !editing )}>{isEditing ? "Save" : "Edit"}</button>
          </li>)
}