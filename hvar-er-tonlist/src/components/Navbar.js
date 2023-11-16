import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navbar = ( {openLoginModal, openLeitModal, openVidburdurModal }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar>
            <Toolbar>
              <Typography  sx={{ flexGrow: 1 }}>
                Hvar er tónlist?
              </Typography>
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/profile">Profile</Link>
              <Button onClick={openVidburdurModal} color="inherit">Nýr vidburdur</Button>
              <Button onClick={openLeitModal} color="inherit">Leita</Button>
              <Button onClick={openLoginModal} color="inherit">Skrá inn</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
  };

export default Navbar;