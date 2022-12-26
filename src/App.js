import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const [userDetails, SetUserDetails] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    userDetails.push({ firstName: firstName, lastName: lastName, email: email, password: password })
    console.log(userDetails);
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    isDisabled(true)
  }
  return (
    <div className='App'>
      <div className='main-container'>
        <div className='description'>
          <div className='description-details'>
            <h1>Learn to code by watching others</h1>
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
          </div>
        </div>

        <div className='form-container'>
          <div className='subscription-div'>
            <p><b>Try it free 7 days </b> then $20/mo. thereafter</p>
          </div>
          <div className='form-div'>
            <form className='form' onSubmit={handleSubmit}>
              <input type='text' className='input-field' onChange={(e) => setFirstName(e.target.value)} name='' id='first-name' placeholder='First Name' required />

              <input type='text' className='input-field' onChange={(e) => setLastName(e.target.value)} name='' id='last-name' placeholder='Last Name' required />

              <input type='email' className='input-field' onChange={(e) => setEmail(e.target.value)} name='' id='email' placeholder='E-mail Address' required />

              <input type='password' className='input-field' onChange={(e) => setPassword(e.target.value)} name='' id='password' placeholder='Password' required />

              <input type='submit' className='submit-button' value='CLAIM YOUR FREE TRIAL' />

              <div className='terms-div'><p>By clicking the button, you are agreeing to our <b className='terms'>terms and services</b></p></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
