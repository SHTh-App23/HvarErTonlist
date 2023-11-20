import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Event = () => {
  const { eventID } = useParams();
  console.log(eventID)

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
    <table>
      <thead>
        <tr>
          <th>Event name</th>
          <th>Date</th>
          <th>Location</th>
          <th>Description</th>
          <th>Organizer</th>
          <th>Picture</th>
          <th>Verd</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => {
          // Filter events based on the condition
          if (event._id === eventID) {
            return (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>{event.description}</td>
                <td>{event.organizer}</td>
                <td><img src={event.picture} alt="Description of the image" /></td>
                <td>{event.verd}</td>
              </tr>
            );
          } else {
            return null; // If the event doesn't match the condition, return null
          }
        })}
      </tbody>
    </table>
  </div>
);

};

export default Event;
