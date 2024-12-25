import { useState } from 'react';
import {styled} from 'styled-components'
import StyledButton from './Button';
import Input from './Input'

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`




export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p>
          <Input
          label='Email'
            invalid = {emailNotValid}
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? 'red' : 'green'
            // }}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Input
          label="Password"
            type="password"
            // className={passwordNotValid ? 'invalid' : undefined}
            className={`label ${passwordNotValid ? 'invalid' : ''}`}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
    </ControlContainer>
    {/* </div> */}
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <StyledButton className='button' onClick={handleLogin}>Sign In</StyledButton>
      </div>
    </div>
  );
}
