import './Header.css'
var data = ["Fundamental", "Crucial", "Important"];
export default function Header(){
  function rand(max) {
    return Math.floor(Math.random() * max +1)
  }

return(
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {data[rand(data.length) - 1]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>)
}