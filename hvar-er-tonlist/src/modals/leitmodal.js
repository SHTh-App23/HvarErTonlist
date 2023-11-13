// LeitModal.js
import React, { useState } from 'react';

const LeitModal = ({ isOpen, onRequestClose, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchQuery);
    // You can pass the search query to the parent component or perform any other action
    onSearch(searchQuery);
    // Close the modal after searching
    onRequestClose();
  };

  return (
    <div>
      <h2>Leita</h2>
      <form>
        <label>
          Search:
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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