import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ( {openLoginModal, openVidburdurModal, openLeitModal }) => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li> 
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={openLoginModal}>Login</button>
          </li>
          <li>
            <button onClick={openVidburdurModal}>Skrá viðburð</button>
          </li>
          <li>
            <button onClick={openLeitModal}>Leita</button>
          </li>
        </ul>
      </nav>
    );
  };

export default Navigation;