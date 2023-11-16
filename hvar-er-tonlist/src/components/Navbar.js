import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = ( {openLoginModal, openLeitModal }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar>
            <Toolbar>
              <Typography  sx={{ flexGrow: 1 }}>
                Hvar er tónlist?
              </Typography>
              <Button onClick={openLeitModal} color="inherit">Leita</Button>
              <Button onClick={openLoginModal} color="inherit">Skrá inn</Button>
            </Toolbar>
          </AppBar>
        </Box> 
      );
  };

export default Navbar;