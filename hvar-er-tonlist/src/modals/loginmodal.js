// LoginModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(users => { console.log(users.data); setUsers(users.data) })
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
    <div className='flex flex-column gap-large'>
      <h1 className='no-margin'>Login</h1>

      <div className='flex flex-column border-radius-small border-darkblue login-input gap-small'>
        <span>Username</span>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      
      <div className='flex flex-column border-radius-small border-darkblue login-input gap-small'>
        <span>Password</span>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button className='border-radius-small' type="button" onClick={handleLogin}>Login</button>

    </div>
  );
};

export default LoginModal;