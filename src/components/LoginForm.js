import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import AuthService from '../services/auth.service';
import './LoginForm.css';  // Import your CSS file for styling

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Disable scrolling when login button is clicked
    document.body.style.overflow = 'hidden';
    
    try {
      const user = await AuthService.login(email, password);
      console.log('Logged in:', user);
      // Re-enable scrolling after login
      document.body.style.overflow = 'auto';

      // Optionally navigate to another page after successful login
      // Example: navigate('/dashboard'); 
    } catch (error) {
      console.error('Login failed:', error);
      // Re-enable scrolling if login fails
      document.body.style.overflow = 'auto';
    }
  };

  return (
    // Background div wrapper with Tailwind CSS for the background image
    <div className="bg-no-repeat bg-center bg-fixed bg-cover w-full h-screen" style={{ backgroundImage: 'url(/Pattern.jpg)' }}>
      <div className="main bg-white w-[600px] mx-auto rounded-lg shadow-xl p-8 mt-32">
        <p className="sign text-center">Sign in</p>
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

        <p className="forgot text-center">
          <a href="#">Forgot Password?</a>
        </p>

        {/* Add a link to the registration page */}
        <p className="text-center">
          New to Pinit? <Link to="/register">Join Here!</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
