import room1 from '../assets/room1.jpeg';
import room2 from '../assets/room2.jpeg';
import room3 from '../assets/room3.jpeg';
import room4 from '../assets/room4.jpeg';
import '../components/Style.css'; 

const mockListings = [
    {
      id: 1,
      imageUrl: room1,
      hostName: 'Hung',
      description: 'Enjoy a bright and comfortable studio in downtown.',
      bedType: 'Queen bed',
      price: '$670 month',
      room: '1 bedrooms, 1 bathrooms, 1 kitchen',
      size: '100m2',
      contactEmail: 'email: hung@gmail.com',
      contactNumber: '123-456-7891'
      // ... other listing properties
    },
    {
      id: 2,
      imageUrl: room2,
      hostName: 'Huy',
      description: 'Spacious two-bedroom with great city views.',
      bedType: 'Double bed',
      price: '$788 month',
      room: '2 bedrooms, 2 bathrooms, 1 kitchen',
      size: '50m2',
      contactEmail: 'email: huy@gmail.com',
      contactNumber: '123-456-7891'
      // ... other listing properties
    },
    {
      id: 3,
      imageUrl: room3,
      hostName: 'Superman',
      description: 'Spacious two-bedroom with great city views.',
      bedType: 'Two double beds',
      price: '$788 month',
      room: '2 bedrooms, 2 bathrooms, 1 kitchen',
      size: '89m2',
      contactEmail: 'email: captain@gmail.com',
      contactNumber: '123-456-7891'
      // ... other listing properties
    },
  
    {
      id: 4,
      imageUrl: room4,
      hostName: 'Wendy',
      description: 'Two Comfortable and cosy bedrooms; Near the Center City',
      bedType: 'Queen bed',
      price: '$800 month',
      room: '2 bedrooms, 2 bathrooms, 1 kitchen',
      size: '120m2',
      contactEmail: 'email: wendy@gmail.com',
      contactNumber: '123-456-7891'
      // ... other listing properties
    },
    // ... more mock listings
];

export default mockListings