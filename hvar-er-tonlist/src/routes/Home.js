import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/getEvents')
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {/* Use a route parameter to pass the event name */}
            <Link to={`/events/${encodeURIComponent(event._id)}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
