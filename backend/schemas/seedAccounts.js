const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Account = require('../models/Account'); // adjust the path as needed
require('dotenv').config({ path: '../.env' }); 

mongoose.connect(process.env.MONGODB_URI)
  .catch(error => console.error('MongoDB connection error:', error));


const seedAccounts = async () => {
  try {
    //Clear the accounts collection before seeding
    await Account.deleteMany({});

    // Seed data for accounts
    const accounts = [
      {
        name: 'Andrew To',
        username: 'anto123',
        email: 'anto123@gmail.com',
        password: 'Password123!',
      },
      {
        name: 'Wendy Nguyen',
        username: 'windyng123',
        email: 'wendynguyenh@gmail.com',
        password: 'Password123!',
      },
    ];

    // Save each account to the database
    for (const accountData of accounts) {
      const account = new Account(accountData);
      await account.save();
    }

    console.log('Accounts have been seeded');
  } catch (error) {
    console.error('Error seeding accounts:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedAccounts();