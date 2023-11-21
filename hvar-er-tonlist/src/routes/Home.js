import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/getEvents')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='page-container'>
      <div className='grid events-container gap-large ' >
        {events.map(event => (
          <Link className='border-radius-large border-darkblue' key={event._id} to={`/event/${event._id}`}>
            <div className='font-darkblue'>
              <img className='event-preview-img border-darkblue' src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1700480482~exp=1700481082~hmac=c3f321efc1f2497f49b8dbed4a4612bd0778c19433f06ef21bcecf29d141869d' />
              <div className='event-details'>
                <h3 className='weight-bold'>
                  {event.name}
                </h3>
                <h4 className='weight-light'>
                  {event.date}
                </h4>
                <h4 className='weight-regular'>
                  {event.location}
                </h4>
                <h4 className='weight-bold'>
                  {event.verd}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
