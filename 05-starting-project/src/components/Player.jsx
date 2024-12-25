import { useState, useRef } from "react";

export default function Player() {

  const [name, setName] = useState('unknown entity');
  const playerName = useRef();

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={()=> setName(playerName.current.value)}>Set Name</button>
      </p>
    </section>
  );
}
