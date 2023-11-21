// LoginModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
    .then(users => {console.log(users.data); setUsers(users.data)})
    .catch(err => console.log(err))
  }, [])

  const handleLogin = () => {

    const token = 'example_token';

    localStorage.setItem('token', token);

    localStorage.setItem('username', username);

    localStorage.setItem('password', password);

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