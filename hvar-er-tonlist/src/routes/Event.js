import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Event = () => {
  const { eventID } = useParams();

  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/getEvents')
      .then((response) => {
        setEvents(response.data);
        
      })
      .catch((err) => console.log(err));

  }, []);


  useEffect(() => {
    events.map((event) => {
      if (event._id === eventID) {
        setEvent(event)
        console.log(event)
      } else {
        return null; // If the event doesn't match the condition, return null
      }
    })
  }, [events])
  

  return (
    <div className='page-container'>
      <div className='event-container'>
        <img className='border-radius-large border-darkblue' src={event.picture} />
        <h1 className='font-darkblue'>{event.name}</h1>
        <h2 className='font-darkblue font-light'>{event.date}</h2>
        <h2 className='font-darkblue font-regular'>{event.location}</h2>
        <h2 className='font-darkblue font-bold'>{event.verd}</h2>
        <div className='event-stats'>
          <div className='border-radius-small font-darkblue'>
            Statistics koma hér
          </div>
        </div>
        <h3 className='event-description font-darkblue font-light'>{event.description}</h3>
      </div>

    </div>
  );

};

export default Event;
