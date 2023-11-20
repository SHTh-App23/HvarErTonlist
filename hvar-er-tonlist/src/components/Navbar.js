import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from './logo.png'


const Navbar = ({ openLoginModal, openLeitModal, openVidburdurModal }) => {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ height: 50}} />
          <Link to="/">Home</Link>
          <Link to="/event">Event</Link>
          <Link to="/profile">Profile</Link>
          <Button onClick={openVidburdurModal} color="inherit">Nýr viðburður</Button>
          <Button onClick={openLeitModal} color="inherit">Leita</Button>
          <Button onClick={openLoginModal} color="inherit">Skrá inn</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;