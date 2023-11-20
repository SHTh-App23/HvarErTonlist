import React, { useEffect, useState } from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import Home from './routes/Home';
import Event from './routes/Event';
import Profile from './routes/Profile';
import LoginModal from './modals/loginmodal';
import Navbar from './components/Navbar'

import VidburdurModal from './modals/vidburdmodal';
import LeitModal from './modals/leitmodal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function App() {

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isVidburdurModalOpen, setVidburdurModalOpen] = useState(false);
  const [isLeitModalOpen, setLeitModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
    setVidburdurModalOpen(false);
    setLeitModalOpen(false);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openVidburdurModal = () => {
    setVidburdurModalOpen(true);
    setLeitModalOpen(false);
    setLoginModalOpen(false);
  };

  const closeVidburdurModal = () => {
    setVidburdurModalOpen(false);
  };

  const openLeitModal = () => {
    setLeitModalOpen(true);
    setVidburdurModalOpen(false);
    setLoginModalOpen(false);
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
      <Navbar openLoginModal={openLoginModal} openLeitModal={openLeitModal} openVidburdurModal={openVidburdurModal} />
      <Routes>
        <Route path="/events" element={<Home />} />
        <Route path="/events/:eventID" element={<Event />} />
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
        <VidburdurModal isOpen={isVidburdurModalOpen} onRequestClose={closeVidburdurModal}/>

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
    


    </>
  );

}

export default App;