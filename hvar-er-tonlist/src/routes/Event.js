import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Event = () => {
  const { eventID } = useParams();
  const userId = localStorage.getItem('userId');

  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(users => { console.log(users.data); setUsers(users.data) })
      .catch(err => console.log(err));

  }, []);

 

  useEffect(() => {
    axios
      .get('http://localhost:3001/getEvents')
      .then((response) => {
        setEvents(response.data);

      })
      .catch((err) => console.log(err));

  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/eventInterest/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyName: 'eventInterest',
          propertyValue: 'yourEventInterestValueHere', // Replace with the actual value
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to save data. Server returned ${response.status}`);
      }

      const result = await response.json();
      console.warn(result);

      if (result) {
        alert("Data saved successfully");
      }
    } catch (error) {
      console.error("Error saving data:", error.message);
      // Handle the error as needed (e.g., display an error message to the user)
    }
  };


  useEffect(() => {
    events.map((event) => {
      if (event._id === eventID) {
        setEvent(event)

      } else {
        return null;
      }
    })
  }, [events, eventID]);

  const eventDate = new Date(event.date)


  return (
    <div className='page-container'>
      <div className='event-container'>
        <img className='border-radius-large border-darkblue' src={event.imageUrls && event.imageUrls.length > 0 ? event.imageUrls[0] : ''} alt='https://picsum.photos/200' />
        <h1 className='font-darkblue'>{event.name}</h1>
        <h2 className='font-darkblue font-regular'>{event.genre}</h2>
        <h2 className='font-darkblue font-light'>{eventDate.toLocaleDateString()}</h2>
        <h2 className='font-darkblue font-regular'>{event.location}</h2>
        <h2 className='font-darkblue font-bold'>{event.verd} kr.</h2>
        <div className='event-stats'>
          <div className='border-radius-small font-darkblue'>
            Statistics koma hér
          </div>
        </div>
        <h3 className='event-description font-darkblue font-light'>{event.description}</h3>
      </div>
      <div>
        <button className='border-radius-small font-darkblue border-darkblue' onClick={handleOnSubmit} color="inherit">
          Hef áhuga
        </button>
      </div>

    </div>
  );

};

export default Event;
