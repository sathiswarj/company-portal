const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const exampleRoutes = require('./routes/exampleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', exampleRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Server is up and running on port 5000');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
