import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Profile = ({openVidburdurModal}) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const isAuthenticated = Boolean(userId);

  const [user, setUser] = useState([])

  useEffect(() => {
    if(!isAuthenticated) {
      console.log('You are not authorized.')
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      axios.get('http://localhost:3001/getUsers')
      .then(users => { setUser(users.data[1]) })
      .catch(err => console.log(err))
    }
  }, [isAuthenticated]);

  const skraUt = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className='page-container'>
      <div className='profile-container'>
        <img src={user.imageUrls} alt=''/>
        <h1 className='font-darkblue'>@{user.username}</h1>
        <h2 className='font-darkblue font-light'><b>Land: </b>{user.country}</h2>
        <h2 className='font-darkblue font-light'><b>Skóli: </b>{user.school}</h2>
        <h2 className='font-darkblue font-light'><b>Aldur: </b>{user.age}</h2>
        <h3 className='font-darkblue font-light'>{user.bio}</h3>
        <button className='border-radius-small font-darkblue border-darkblue' onClick={openVidburdurModal} color="inherit">Nýr viðburður</button><br/><br/>
        <button className='border-radius-small font-darkblue border-darkblue' onClick={skraUt} color="inherit">Skrá út</button>
      </div>
    </div>
  );
};

/* 

<td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.age}</td>
    <td>{user.bio}</td>
    <td>{user.country}</td>
    <td>{user.login}</td>
    <td>{user.password}</td>
    <td>{user.country}</td>
    <td>{user.school}</td>
    <td>{user._id}</td>

    */

export default Profile;
