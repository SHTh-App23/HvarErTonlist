import React from 'react';
import logo from './logo.svg'
import { Link } from 'react-router-dom';

const Navbar = ({ openLoginModal, openLeitModal}) => {
  return (
    <header>
      <div>
      <div>
        <Link to='/'>
        <img src={logo} alt="Logo" className='logo' />
        </Link>
      </div>
      <div className='flex gap-small'>
        
        <button className='border-radius-small font-darkblue border-darkblue' onClick={openLeitModal} color="inherit">Leita</button>
        <button className='border-radius-small font-darkblue border-darkblue' onClick={openLoginModal} color="inherit">Skrá inn</button>
      </div>
      </div>
    </header>
  );
};
export default Navbar;