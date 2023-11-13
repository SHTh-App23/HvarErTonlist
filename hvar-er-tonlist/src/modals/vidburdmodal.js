// VidburdurModal.js
import React, { useState } from 'react';

const VidburdurModal = ({ isOpen, onRequestClose }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventPhoto, setEventPhoto] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventPrice, setEventPrice] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSave = () => {
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
  };

  return (
    <div>
      <h2>Nýr viðburður</h2>
      <form>
        <label>
          Titill:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </label>
        <br />
        <label>
          Dagsetning:
          <input type="text" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </label>
        <br />
        <label>
          Mynd:
          <input type="text" value={eventPhoto} onChange={(e) => setEventPhoto(e.target.value)} />
        </label>
        <br />
        <label>
          Staðsetning:
          <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Verð:
          <input type="text" value={eventPrice} onChange={(e) => setEventPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Lýsing:
          <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default VidburdurModal;