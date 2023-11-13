import React, { useEffect, useState } from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import Home from './routes/Home';
import Events from './routes/Events';
import Profile from './routes/Profile';
import Navigation from './Navigation';
import LoginModal from './modals/loginmodal';

import VidburdurModal from './modals/vidburdmodal';
import LeitModal from './modals/leitmodal';

import axios from 'axios';



Modal.setAppElement('#root'); // Set the root element for accessibility

function App() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  }, [])


  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isVidburdurModalOpen, setVidburdurModalOpen] = useState(false);
  const [isLeitModalOpen, setLeitModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openVidburdurModal = () => {
    setVidburdurModalOpen(true);
  };

  const closeVidburdurModal = () => {
    setVidburdurModalOpen(false);
  };

  const openLeitModal = () => {
    setLeitModalOpen(true);
  };

  const closeLeitModal = () => {
    setLeitModalOpen(false);
  };

  const modalStyles = {
    content: {
      width: '50%', // Set the desired width
      height: '50%', // Set the desired height
      margin: 'auto', // Center the modal
    },
  };

  const handleSearch = (searchQuery) => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <Navigation openLoginModal={openLoginModal} openVidburdurModal={openVidburdurModal} openLeitModal={openLeitModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        contentLabel='Login Modal'
        style={modalStyles}
      >
        <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
      </Modal>


      <Modal
        isOpen={isVidburdurModalOpen}
        onRequestClose={closeVidburdurModal}
        contentLabel='Vidburdur Modal'
        style={modalStyles}
      >
        <VidburdurModal isOpen={isVidburdurModalOpen} onRequestClose={closeVidburdurModal} />
      </Modal>

      <Modal
        isOpen={isLeitModalOpen}
        onRequestClose={closeLeitModal}
        contentLabel="Leit Modal"
        style={modalStyles}
      >
        <LeitModal
          isOpen={isLeitModalOpen}
          onRequestClose={closeLeitModal}
          onSearch={handleSearch}
        />
      </Modal>
    
    <div>
      <table>
        <thead>
          <tr>
            <th>
              First Name
            </th>
            <th>
              Last name
            </th>
            <th>
              Age
            </th>
            <th>Bio</th>
            <th>country</th>
            <th>login</th>
            <th>password</th>
            <th>country</th>
            <th>school</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.bio}</td>
              <td>{user.country}</td>
              <td>{user.login}</td>
              <td>{user.password}</td>
              <td>{user.country}</td>
              <td>{user.school}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>

    </>
  );

}

export default App;