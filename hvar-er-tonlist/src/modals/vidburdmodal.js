// VidburdurModal.js
import React, { useState } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";


const VidburdurModal = ({ isOpen, onRequestClose }) => {
  
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [verd, setPrice] = useState("");
  
  const [imageUrls, setImageUrls] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    return new Promise((resolve, reject) => {
      if (imageUpload == null) {
        reject("No image to upload");
      } else {
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref)
              .then((url) => {
                resolve(url); // Resolve the promise with the public URL
              })
              .catch((error) => reject(error));
          })
          .catch((error) => reject(error));
      }
    });
  };
  

  // Skra nytt event
  const handleOnSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const imageUrl = await uploadFile(); // Wait for image upload to complete
  
      const response = await fetch('http://localhost:3001/registerEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          date,
          location,
          description,
          imageUrls: [imageUrl], // Send the public URL in an array
          organizer,
          verd,
        }),
      });
  
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
        setImageUrls([]); // Clear image URLs after saving
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
          <input
            type="file"
              onChange={(e) => {
              //setImageUrls(e.target.files[0]);
              setImageUpload(e.target.files[0]);
            }}
          />
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