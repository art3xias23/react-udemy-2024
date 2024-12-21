import logo from '../assets/logo.png';
import {styled} from 'styled-components';

const StyledHeader = styled.header`
 display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

   & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }
  
  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: 'Pacifico', cursive;
    margin: 0;
  }

`

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1 style={{
        color: 'blue'
      }}>ReactArt</h1>
      {/* <p style={{
        color:'red',
        textAlign:'left'
      }}> */}
      <p
      >
        A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}
