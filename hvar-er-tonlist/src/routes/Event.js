import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Event = () => {

  const [events, setEvents] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getEvents')
      .then(events => { console.log(events.data); setEvents(events.data) })
      .catch(err => console.log(err))
  }, [])

  return <div>Event Details Page

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
          {events.map((event) => {
            return <tr>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>{event.description}</td>
              <td>{event.organizer}</td>
              <td><a href={event.picture}>Link</a></td>
              <td>{event.verd}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </div>

};

export default Event;