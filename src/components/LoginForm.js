import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import AuthService from '../services/auth.service';
import './LoginForm.css';  // Import your CSS file for styling

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthService.login(email, password);
      console.log('Logged in:', user);
      // You can navigate to another page after successful login here
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="main">
      <p className="sign" align="center">Sign in</p>
      <form onSubmit={handleLogin} className="form1">
        <div>
          <input
            className="un"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className="pass"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit">Sign in</button>
      </form>

      <p className="forgot" align="center">
        <a href="#">Forgot Password?</a>
      </p>

      {/* Add a link to the registration page */}
      <p align="center">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
