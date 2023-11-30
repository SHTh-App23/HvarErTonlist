// LoginModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onRequestClose, openNewUserModal }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(users => { console.log(users.data); setUsers(users.data) })
      .catch(err => console.log(err));
  }, []);

  const handleLogin = () => {
    users.map(user => {
      if (user.username === username) {
        if (user.password === password) {
          localStorage.setItem('userId', user._id);
          navigate(`profile/${user._id}`);
        } else {
          console.log('Password not found.');
        }
      } else {
        console.log('User not found.');
      }
    });

    onRequestClose();
  };

  return (
    <div className='flex flex-column gap-large'>
      <h1 className='no-margin'>Login</h1>
      <input placeholder='Username' className='border-radius-small text-input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder='Password' className='border-radius-small text-input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className='flex gap-small'>
        <button className='border-radius-small border-darkblue' type="button" onClick={handleLogin}>Skrá inn</button>
        <button className='border-radius-small border-darkblue' type="button" onClick={openNewUserModal}>Búa til aðgang</button>
      </div>
    </div>
  );
};

export default LoginModal;
