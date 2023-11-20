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
  );
};

export default Navbar;