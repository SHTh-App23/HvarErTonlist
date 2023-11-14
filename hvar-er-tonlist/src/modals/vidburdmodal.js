// VidburdurModal.js
import React, { useState } from 'react';
import axios from 'axios';

const VidburdurModal = ({ isOpen, onRequestClose }) => {
  /*const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventPhoto, setEventPhoto] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventPrice, setEventPrice] = useState('');
  const [eventDescription, setEventDescription] = useState('');*/

  // Skra nytt event
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [picture, setPicture] = useState("");
  const [verd, setPrice] = useState("");
  const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:3000/registerEvent', {
            method: "post",
            body: JSON.stringify({ name, date, location, description, organizer, picture, verd }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setName("");
            setDate("");
            setLocation("");
            setDescription("");
            setOrganizer("");
            setPicture("");
            setPrice("");
        }
  }

  /*const handleSave = () => {
    // Implement your logic to save the event details
    console.log('Saving event details:', {
      eventName,
      eventDate,
      eventPhoto,
      eventLocation,
      eventPrice,
      eventDescription,
    });
    // Close the modal after saving
    onRequestClose();
  };*/

  return (
    <div>
      <h2>Nýr viðburður</h2>
      <form>
        <label>
          Titill:
          <input type="text"  onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Dagsetning:
          <input type="text" onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          Mynd:
          <input type="text" onChange={(e) => setPicture(e.target.value)} />
        </label>
        <br />
        <label>
          Staðsetning:
          <input type="text" onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Verð:
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Lýsing:
          <textarea onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleOnSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default VidburdurModal;