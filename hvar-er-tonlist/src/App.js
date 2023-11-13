import React, { useState } from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import Home from './routes/Home';
import Events from './routes/Events';
import Profile from './routes/Profile';
import Navigation from './Navigation';
import LoginModal from './modals/loginmodal';
import VidburdurModal from './modals/vidburdmodal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isVidburdurModalOpen, setVidburdurModalOpen] = useState(false);

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

  const modalStyles = {
    content: {
      width: '50%', // Set the desired width
      height: '50%', // Set the desired height
      margin: 'auto', // Center the modal
    },
  };

  return (
    <>
      <Navigation openLoginModal={openLoginModal} openVidburdurModal={openVidburdurModal} />
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
    </>
  );
}

export default App;