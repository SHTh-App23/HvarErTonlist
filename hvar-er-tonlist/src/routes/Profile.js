import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Profile = ({openVidburdurModal}) => {

  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(users => { setUser(users.data[0]) })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='page-container'>
      <div className='profile-container'>
        <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1700480482~exp=1700481082~hmac=c3f321efc1f2497f49b8dbed4a4612bd0778c19433f06ef21bcecf29d141869d' />
        <h1 className='font-darkblue'>@{user.username}</h1>
        <h2 className='font-darkblue font-light'><b>Land: </b>{user.country}</h2>
        <h2 className='font-darkblue font-light'><b>Skóli: </b>{user.school}</h2>
        <h2 className='font-darkblue font-light'><b>Aldur: </b>{user.age}</h2>
        <h3 className='font-darkblue font-light'>{user.bio}</h3>
        <button className='border-radius-small font-darkblue border-darkblue' onClick={openVidburdurModal} color="inherit">Nýr viðburður</button><br/><br/>
        <button className='border-radius-small font-darkblue border-darkblue' color="inherit">Skrá út</button>
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
