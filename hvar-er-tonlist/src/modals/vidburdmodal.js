// VidburdurModal.js
import React, { useState } from 'react';
import axios from 'axios';
import closeVidburdurModal from "../App";

const VidburdurModal = ({ isOpen, onRequestClose }) => {

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
  
    try {
      const response = await fetch(
        'http://localhost:3001/registerEvent', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, date, location, description, organizer, picture, verd }),
        }
      );
  
      if (!response.ok) {
        throw new Error(`Failed to save data. Server returned ${response.status}`);
      }
  
      const result = await response.json();
      console.warn(result);
  
      if (result) {
        alert("Data saved successfully");
        setName("");
        setDate("");
        setLocation("");
        setDescription("");
        setOrganizer("");
        setPicture("");
        setPrice("");
        onRequestClose();
      }
    } catch (error) {
      console.error("Error saving data:", error.message);
      // Handle the error as needed (e.g., display an error message to the user)
    }
  };


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