import React from 'react';
import SearchBar from '../components/SearchBar'; // Make sure this path is correct
import '../components/Style.css'; 
import { useNavigate } from 'react-router-dom';

function HomePage({ onSearch }) {
  let navigate = useNavigate();

  const handleSearch = (zipCode) => {
    console.log('Search for:', zipCode);
    navigate(`/search?zipcode=${zipCode}`);
  };

  return (
    <div className="homepage">
      <div className="search-container">
        <h1 className="welcome-message">Welcome to Dragon Nest</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
}

export default HomePage;
