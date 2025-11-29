const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI not set in environment');
  await mongoose.connect(uri, {
    // ...defaults are usually fine with mongoose 7+
  });
  console.log('MongoDB connected');
};

module.exports = connectDB;
