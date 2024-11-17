import React, { useState } from 'react';
import AuthService from '../services/auth.service';
import './RegisterForm.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error
    
    if (!email || !password) {
      setError('Please fill out both email and password fields');
      return;
    }
  
    try {
      const user = await AuthService.register(email, password);
      console.log('User registered:', user);
    } catch (err) {
      console.error('Registration error:', err); // Log the detailed error
      // Display a more detailed error message
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use. Please choose another one.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password is too weak. Please use a stronger password.');
      } else {
        setError('Error registering user. Please try again later.');
      }
    }
  };
  
  

  return (
    <div class ="flex-auto h-full bg-black border-spacing-1">
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
