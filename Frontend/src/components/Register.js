import React, { useState } from 'react';
import API from '../api/api'; // Import your Axios instance properly


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use your Axios instance with baseURL set in api.js
      await API.post('/auth/register', { username, email, password });
      setSuccess('Registration successful! Please login.');
      setError('');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: 'auto' }}>
      <h2>User Registration</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        style={{ width: '100%', padding: 8, margin: '8px 0' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={{ width: '100%', padding: 8, margin: '8px 0' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ width: '100%', padding: 8, margin: '8px 0' }}
      />
      <button type="submit" style={{ width: '100%', padding: 8 }}>Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
};

export default Register;
