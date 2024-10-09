const mongoose = require('mongoose');
const Nest = require('../models/Nest'); 
require('dotenv').config({ path: '../.env' }); 
const room1_a = 'http://localhost:5001/images/room1_a.jpeg';
const room1_b = 'http://localhost:5001/images/room1_b.jpeg';
const room1_c = 'http://localhost:5001/images/room1_c.jpeg';
const room1_d = 'http://localhost:5001/images/room1_d.jpeg';
const room2_a = 'http://localhost:5001/images/room2_a.jpeg';
const room2_b = 'http://localhost:5001/images/room2_b.jpeg';
const room2_c = 'http://localhost:5001/images/room2_c.jpeg';
const room2_d = 'http://localhost:5001/images/room2_d.jpeg';
const room3_a = 'http://localhost:5001/images/room3_a.jpeg';
const room3_b = 'http://localhost:5001/images/room3_b.jpeg';
const room3_c = 'http://localhost:5001/images/room3_c.jpeg';
const room3_d = 'http://localhost:5001/images/room3_d.jpeg';
const room4_a = 'http://localhost:5001/images/room4_a.jpeg';
const room4_b = 'http://localhost:5001/images/room4_b.jpeg';
const room4_c = 'http://localhost:5001/images/room4_c.jpeg';
const room4_d = 'http://localhost:5001/images/room4_d.jpeg';
const room5_a = 'http://localhost:5001/images/room5_a.jpeg';
const room5_b = 'http://localhost:5001/images/room5_b.jpeg';
const room5_c = 'http://localhost:5001/images/room5_c.jpeg';
const room5_d = 'http://localhost:5001/images/room5_d.jpeg';

mongoose.connect(process.env.MONGODB_URI)
  .catch(error => console.error('MongoDB connection error:', error));

const seedData = [
  {
    title: 'Hung',
    description: 'Enjoy a bright and comfortable studio in downtown.',
    bedType: 'Queen bed',
    price: 670, 
    zipcode: '19100',
    images: [room1_a, room1_b, room1_c, room1_d],
    available: true,
    amenities: ['WiFi', 'Air Conditioning'], 
    address: '123 Main Street, City, State, Zip',
    contact: {
      phoneNumber: '1234567890', 
      email: 'hung@gmail.com'
    },
    size: '100m2',
    createdAt: new Date() 
  },
  {
    title: 'Huy',
    description: 'Spacious two-bedroom with great city views.',
    bedType: 'Double bed',
    price: 788, 
    zipcode: '19200',
    images: [room2_a, room2_b, room2_c, room2_d], 
    available: true,
    amenities: ['WiFi', 'Air Conditioning'], 
    contact: {
      phoneNumber: '1234567890', 
      email: 'hung@gmail.com'
    },
    size: '100m2',
    address: '123 Main Street, City, State, Zip',
    createdAt: new Date() 
  },
  {
  
    title: 'Superman',
    description: 'Spacious two-bedroom with great city views.',
    bedType: 'Two double beds',
    price: 788, 
    zipcode: '19300',
    images: [room3_a, room3_b, room3_c, room3_d], 
    available: true,
    amenities: ['WiFi', 'Air Conditioning'],
    contact: {
      phoneNumber: '1234567890', 
      email: 'superman@gmail.com'
    }, 
    size: '100m2',
    address: '123 Main Street, City, State, Zip',
    createdAt: new Date() 
  },
  {
    title: 'Wendy',
    description: 'Two Comfortable and cosy bedrooms; Near the Center City',
    bedType: 'Queen bed',
    price: 670, 
    zipcode: '19400',
    images: [room4_a, room4_b, room4_c, room4_d],
    available: true,
    amenities: ['WiFi', 'Air Conditioning'], 
    contact: {
      phoneNumber: '1234567890', 
      email: 'wendy@gmail.com'
    },
    size: '100m2',
    address: '123 Main Street, City, State, Zip',
    createdAt: new Date() 
    // ... other listing properties as per your schema
  },

  {
    title: 'Lewis',
    description: '4 bedrooms; near Walmart, MFL Station, Urgent cares ',
    bedType: 'Queen bed',
    price: 700, 
    zipcode: '19100',
    images: [room5_a, room5_b, room5_c, room5_d], 
    available: true,
    amenities: ['WiFi', 'Air Conditioning', 'Weekly trash collection'], 
    contact: {
      phoneNumber: '1234567890', 
      email: 'andrew@gmail.com'
    },
    size: '80m2',
    address: '123 Main Street, City, State, Zip',
    createdAt: new Date() 
  },
];
Nest.deleteMany({}) // WARNING: This will delete all existing documents in the Nest collection!
  .then(() => Nest.insertMany(seedData))
  .then(() => {
    console.log('Data seeded successfully!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding data:', err);
    mongoose.connection.close();
  });
