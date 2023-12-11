import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Event = () => {
  const { eventID } = useParams();
  const userId = localStorage.getItem('userId');

  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  const [userExpressedInterest, setUserExpressedInterest] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(users => { setUsers(users.data) })
      .catch(err => console.log(err));

  }, []);

 

  useEffect(() => {
    axios
      .get('http://localhost:3001/getEvents')
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch((err) => console.log(err));

  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`http://localhost:3001/events/${eventID}/interest`, { userId });
  
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
  
      alert("Þú hefur áhuga á þessum viðburði");
      setUserExpressedInterest(true);
    } catch (error) {
      console.error("Error adding user to interestedUsers array:", error.message);
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
        <img className='border-radius-large border-darkblue' src={event.imageUrls && event.imageUrls.length > 0 ? event.imageUrls[0] : ''} />
        <h1 className='font-darkblue'>{event.name}</h1>
        <h2 className='font-darkblue font-regular'>{event.genre}</h2>
        <h2 className='font-darkblue font-light'>{eventDate.toLocaleDateString()}</h2>
        <h2 className='font-darkblue font-regular'>{event.location}</h2>
        <h2 className='font-darkblue font-bold'>{event.verd} kr.</h2>
        <div className='event-stats'>
          <div className='border-radius-small font-darkblue'>
            {events.map(event => {
              
              if (event._id == eventID) {
                return <p>Það hafa {event.interestedUsers.length} áhuga á þessum viðburð.</p>
              }
            })}
          </div>
        </div>
        <h3 className='event-description font-darkblue font-light'>{event.description}</h3>
      </div>
      <div>

        {!userExpressedInterest && userId && (
          <button className='border-radius-small font-darkblue border-darkblue' onClick={handleOnSubmit} color="inherit">
            Hef áhuga
          </button>
        )}

      </div>


    </div>
  );

};

export default Event;
