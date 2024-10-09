import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListingDetail from '../components/ListingDetail';


function DetailPage() {
  const [listing, setListing] = useState([]); // State to store listing
  const { id } = useParams(); // Get the id from URL params
  

  // Function to fetch listings from the backend
  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5001/nests/listings/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setListing(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };
  
    fetchListingDetails(); // Call fetchListingDetails inside the useEffect callback
  }, [id]);

  const handleAddToWishlist = () => {
    // Implement the logic to add the listing to the wishlist
    // This could involve making a request to your backend or managing state locally
    console.log('Added to wishlist:', listing);
  };
  
   // Render the DetailPage component
  return (
    <div className='detail-page'>
      {listing && listing.contact ? (
        <>
        <ListingDetail
          imageUrls={listing.images} 
          hostName={listing.hostName}
          description={listing.description}
          bedType={listing.bedType}
          price={listing.price}
          room={listing.room}
          size={listing.size}
          email={listing.contact.email}
          address={listing.address}
          phoneNumber={listing.contact.phoneNumber}
        />
        <button onClick={handleAddToWishlist} className="wishlist-button">Add to Favorite</button>
        </>
      ) : (
        <p>Loading...</p> // Or some loading component
      )}
    </div>
  );
};

export default DetailPage;