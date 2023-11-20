// LoginModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [events, setEvents] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getEvents')
      .then(events => { console.log(events.data); setEvents(events.data) })
      .catch(err => console.log(err))
  }, [])

  const handleLogin = () => {
    
    axios.post('http://localhost:3001/login', {username, password})
    .then(response => {
      if (response && response.data) {
        console.log(response.data.message);
        // Additional logic after successful login
      } else {
        console.error('Invalid response from server');
        // Handle unexpected response from server
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        // Unauthorized - login failed
        console.error('Invalid username or password');
      } else {
        console.error(error.response ? error.response.data.message : 'Error occurred');
        // Handle other errors
      }
    });
    // Close the modal after login
    onRequestClose();
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginModal;