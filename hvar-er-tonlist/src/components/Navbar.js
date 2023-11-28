import React from 'react';
import logo from './logo.svg'
import { Link } from 'react-router-dom';

const Navbar = ({ openLoginModal, openLeitModal, openVidburdurModal }) => {

  const userId = localStorage.getItem('userId');

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
        {userId == null ? (
          <button className='border-radius-small font-darkblue border-darkblue' onClick={openLoginModal} color="inherit">Skrá inn</button>
        ) : (
          <Link to='profile'>
            <button className='border-radius-small font-darkblue border-darkblue max-height'>Prófíll</button>
          </Link>
        )}
      </div>
      </div>
    </header>
  );
};
export default Navbar;