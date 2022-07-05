const express = require("express");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// LOGGING HTTP REQUEST
const morgan = require("morgan");
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

// ENV PORT INITIALIZATION
dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 5000;

// MONGODB CONNECTION
const connectDB = require("./config/dbConnection");
connectDB();

// API
const expense = require("./routes/book");
// const task = require("./routes/task");
app.use("/api", expense);
// app.use("/api", task);

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}...`);
});
