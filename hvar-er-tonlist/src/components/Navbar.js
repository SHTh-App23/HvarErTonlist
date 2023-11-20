import React from 'react';
import logo from './logo.svg'
import { Link } from 'react-router-dom';

const Navbar = ({ openLoginModal, openLeitModal, openVidburdurModal }) => {



  return (
    <header>
      <div>
      <div>
        <Link to='/'>
        <img src={logo} alt="Logo" className='logo' />
        </Link>
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