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
          navigate('profile');
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
      Ertu ekki með aðgang? <br></br>
      <button onClick={openNewUserModal}>Stofnaðu nýjan</button>
    </div>
  );
};

export default LoginModal;
