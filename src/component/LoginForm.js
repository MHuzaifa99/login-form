import './LoginForm.css';
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[isEmptyEmail, setIsEmptyEmail] = useState(false)
  const[isEmptyPassword, setIsEmptyPassword] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form input
    if (!email || !password) {
      // alert('Please fill out all fields.');
      setIsEmptyEmail(!email? true: false)
      setIsEmptyPassword(!password ? true: false)
      return;
    }
    setIsEmptyEmail(false)
    setIsEmptyPassword(false)
    alert('You have successfully logged in')
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit} className='form-container'>
      <h2 className='form-header'>Log In</h2>

      <label htmlFor="email" className={isEmptyEmail ? 'form-label-empty' : 'form-label'}>Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className={isEmptyEmail ? 'form-input-empty' :'form-input'} /><br /><br />

      <label htmlFor="password" className={isEmptyPassword ? 'form-label-empty' : 'form-label'}>Password:</label>
      <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className={isEmptyPassword ? 'form-input-empty' :'form-input'}/><br /><br />

      <button type="submit" className='form-button'>Log In</button>
    </form>
    </div>
  );
}

  export default LoginForm;
 
  
  