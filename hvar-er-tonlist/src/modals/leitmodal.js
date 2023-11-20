// LeitModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeitModal = ({ isOpen, onRequestClose, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(''); 
  const [selectedGenre, setSelectedGenre] = useState('');
  const [ticketPrice, setTicketPrice] = useState(0);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const [events, setEvents] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getEvents')
      .then(events => { console.log(events.data); setEvents(events.data) })
      .catch(err => console.log(err))
  }, [])

  const handleSearch = () => {
    // Implement your search logic here
    console.log(
      'Searching for:',
      searchQuery,
      'in location',
      selectedLocation,
      'with genre',
      selectedGenre,
      'with ticket price',
      ticketPrice,
      'from date',
      fromDate,
      'to date:',
      toDate
      );
    const filteredEvents = events.filter(event => {
      return (
        (searchQuery === '' || event.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedLocation === '' || event.location === selectedLocation) &&
        (selectedGenre === '' || event.genre === selectedGenre) &&
        (event.ticketPrice <= ticketPrice) &&
        (fromDate === '' || event.date >= fromDate) &&
        (toDate === '' || event.date <= toDate)
      );
    });

    // You can pass the search query to the parent component or perform any other action
    onSearch({ filteredEvents });
    // Close the modal after searching
    onRequestClose();
  };

  return (
    <div>
      <h2>Leita</h2>
      <form>
        <label>
          Leitarorð:
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        <br />
        <label>
          Staðsetning:
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Gaukurinn">Gaukurinn</option>
            <option value="Iðnó">Iðnó</option>
          </select>
        </label>
        <br />
        <label>
          Tónlistartegund:
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Hip hop">Hip hop</option>
            <option value="Jazz">Jazz</option>
            <option value="Classical">Classical</option>
          </select>
        </label>
        <br />
        <label>
          Miðaverð: {ticketPrice}kr
          <br />
          <input
            type="range"
            min="0"
            max="10000"
            step="1"
            value={ticketPrice}
            onChange={(e) => setTicketPrice(parseInt(e.target.value))}
          />
        </label>
        <br />
        <label>
          Frá:
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Til:
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default LeitModal;