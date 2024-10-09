import Listing from '../components/Listing';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function ListingPage() {
  const [listings, setListings] = useState([]); // State to store listings
  const location = useLocation();

  // A function to parse the query string
  const getZipCodeFromSearch = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('zipcode');
  };

  // Function to fetch listings from the backend
  const fetchListings = async () => {
    const zipCode = getZipCodeFromSearch(); // Get the zipcode from the URL search parameters
    const queryParams = zipCode ? `?zipcode=${zipCode}` : '';
    try {
      const response = await fetch(`http://localhost:5001/nests/search${queryParams}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setListings(data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  // Effect to fetch listings based on the zipcode in the URL query
  useEffect(() => {
    fetchListings();
  }, [location]); 

  // Render the ListingPage component
  return (
    <div className="listing-page">
      <div className="listings-container">
        <h1>Search Results</h1>
        {listings.map((listing) => (
          <Listing
            key={listing._id}
            imageUrl={listing.images[0]}
            title={listing.title}
            description={listing.description}
            bedType={listing.bedType}
            price={listing.price}
            id={listing._id}
            amenities={listing.amenities}
            zipCode={listing.zipcode}
            onListingClick={() => console.log('Listing clicked:', listing._id)} // Or handle the click as needed
          />
        ))}
      </div>
    </div>
  );
}

export default ListingPage;
