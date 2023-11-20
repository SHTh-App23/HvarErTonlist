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
            <th>
              Event name
            </th>
            <th>
              Date
            </th>
            <th>
              Location
            </th>
            <th>Description</th>
            <th>Organizer</th>
            <th>Picture link</th>
            <th>Verd</th>
          </tr>
        </thead>
        <tbody>
        {events.map(event => {
        if (event._id == eventID) {
          return <tr>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>{event.description}</td>
              <td>{event.organizer}</td>
              <td><a href={event.picture}>Link</a></td>
              <td>{event.verd}</td>
            </tr>
        }
      })}
        </tbody>
      </table>
    </div>
      
  );
};

export default Event;
