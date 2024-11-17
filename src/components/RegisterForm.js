import React, { useState } from 'react';
import './RegisterForm.css'; // Import your custom CSS file for additional styling if needed

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    // Handle the registration logic here
  };

  return (
    <div className="bg-no-repeat bg-center bg-fixed bg-cover w-full h-screen" style={{ backgroundImage: 'url(/Pattern.jpg)' }}>
      <div className="main bg-white w-[600px] mx-auto rounded-lg shadow-xl p-8 mt-32">
        <h1 className="text-3xl font-extrabold text-center text-gray-600 mb-8">Create an Account</h1>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="w-full py-3 bg-blue-400 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-gray-600 hover:text-gray-700">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
