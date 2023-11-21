// Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Profile = () => {
  // Fa usera
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
    .then(users => {setUsers(users.data)})
    .catch(err => console.log(err))
  }, [])
  
  return <div>Profile Page
      <table>
    <thead>
      <tr>
        <th>
          First Name
        </th>
        <th>
          Last name
        </th>
        <th>
          Age
        </th>
        <th>Bio</th>
        <th>country</th>
        <th>login</th>
        <th>password</th>
        <th>country</th>
        <th>school</th>
        <th>id</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => {
        return <tr key={user._id}>
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
        </tr>
      })}
    </tbody>
  </table>
  </div>;
};

export default Profile;