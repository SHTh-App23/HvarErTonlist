import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import { storage } from "../firebase";
  import { v4 } from "uuid";

const NewUserModal = ({isOpen, onRequestClose}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordII, setPasswordII] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [school, setSchool] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [bio, setBio] = useState('');

    const [imageUrls, setImageUrls] = useState("");
    const imagesListRef = ref(storage, "userImages/");

    const uploadFile = () => {
        return new Promise((resolve, reject) => {
          if (imageUpload == null) {
            reject("No image to upload");
          } else {
            const imageRef = ref(storage, `userImages/${imageUpload.name + v4()}`);
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

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            if (password !== passwordII) {
                alert("Passwords do not match.");
                return;
              }
            const imageUrl = await uploadFile(); // Wait for image upload to complete
        
            const response = await fetch('http://localhost:3001/registerUser', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username,
                password,
                age,
                country,
                school,
                imageUrls: [imageUrl], // Send the public URL in an array
                bio
              }),
            });
        
            if (!response.ok) {
              throw new Error(`Failed to save data. Server returned ${response.status}`);
            }
        
            const result = await response.json();
            console.warn(result);
        
            if (result) {
              alert("Data saved successfully");
              setUsername("");
              setPassword("");
              setPasswordII("");
              setAge("");
              setBio("");
              setCountry("");
              setSchool("");
              setImageUrls([]); // Clear image URLs after saving
              onRequestClose();
            }  
          } catch (error) {
            console.error("Error saving data:", error.message);
            // Handle the error as needed (e.g., display an error message to the user)
          }
    }

    return (
        <div>
            <h2>Create new account</h2>
            <form>
                <label>
                    Username:
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label> <br/>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label> <br/>
                    Repeat password:
                    <input type="password" value={passwordII} onChange={(e) => setPasswordII(e.target.value)}/>
                </label>
                <label> <br/>
                    Country:
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}/>
                </label>
                <label> <br/>
                    School:
                    <input type="text" value={school} onChange={(e) => setSchool(e.target.value)}/>
                </label>
                <label> <br/>
                    Age:
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
                </label>
                <label> <br/>
                    Bio:
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)}/>
                </label> <br/>
                <label>
                    Profile picture:
                <input
                    type="file"
                    onChange={(e) => {
                        //setImageUrls(e.target.files[0]);
                        setImageUpload(e.target.files[0]);
                    }}/>
                </label> <br/>
                <button type="button" onClick={handleOnSubmit}>
                    Create
                </button>
            </form>
        </div>
    )
}

export default NewUserModal;