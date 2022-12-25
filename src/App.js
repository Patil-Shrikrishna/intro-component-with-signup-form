import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState({})
  function handleChange(event){
    const {name, value} = event.target;
    setUser({name : value})
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(user);
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
              <input type='text' className='input-field' onChange={handleChange} name='' id='first-name' placeholder='First Name' />

              <input type='text' className='input-field' onChange={handleChange} name='' id='last-name' placeholder='Last Name' />

              <input type='email' className='input-field' onChange={handleChange} name='' id='email' placeholder='E-mail Address' />

              <input type='password' className='input-field' onChange={handleChange} name='' id='password' placeholder='Password' />

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
