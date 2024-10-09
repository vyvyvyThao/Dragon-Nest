import React from 'react';

// Import any additional assets or styles here

function ListingDetail({ imageUrls, hostName, description, bedType, price, room, size, email, phoneNumber, address }) {
  return (
    <div className="detail-container">
        <div className="listing-details">
          <div className="image-container">
            {imageUrls.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="listing-image" />
            ))}
          </div>
            <p className='detail-hostname'>{hostName}</p>
            <p className='detail-description'>{description}</p>
            <p className='detail-price'>${price}/month</p>
            <p className='detail-bed'>{bedType}</p>
            {room && <p className='detail-room'>{room}</p>}
            <p className='detail-size'>{size}</p>
            <p className='detail-address'>Address: {address}</p>
            <h2 className="contact-header">Contact Information:</h2>
            <p className='detail-contact'>Email: {email}</p> 
            <p className='detail-contact'>Phone Number: {phoneNumber}</p> 
            {/* Add more details here if needed */}
        </div>
    </div>
  );
}

export default ListingDetail;