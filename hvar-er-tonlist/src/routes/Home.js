import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Home = () => {

  const [events, setEvents] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/getEvents')
      .then(events => { console.log(events.data); setEvents(events.data) })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;