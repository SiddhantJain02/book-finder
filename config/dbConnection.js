const mongoose = require("mongoose");
const URL = process.env.MONGO_URI;

// MongoDB Connection with Database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://siddhant_jain:8077167383@cluster0.6rrzgvy.mongodb.net/?retryWrites=true&w=majority');
    console.log(`MongoDB running at ${conn.connection.host}:${conn.connection.port}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
