import React from 'react';
import logo from './logo.svg'


const Navbar = ({ openLoginModal, openLeitModal, openVidburdurModal }) => {



  return (
    <header>
      <div>
      <div>
        <img src={logo} alt="Logo" className='logo' />
      </div>
      <div className='flex gap-small'>
        <button onClick={openVidburdurModal} color="inherit">Nýr viðburður</button>
        <button onClick={openLeitModal} color="inherit">Leita</button>
        <button onClick={openLoginModal} color="inherit">Skrá inn</button>
      </div>
      </div>
    </header>
    /*
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Logo" style={{ height: 40}} /> 
          </Typography>
          
          <Link to="/">Home</Link>
          <Link to="/event">Event</Link>
          <Link to="/profile">Profile</Link>
          <Button onClick={openVidburdurModal} color="inherit">Nýr viðburður</Button>
          <Button onClick={openLeitModal} color="inherit">Leita</Button>
          <Button onClick={openLoginModal} color="inherit">Skrá inn</Button>
        </Toolbar>
      </AppBar>
    </Box>
    */
  );
};

export default Navbar;