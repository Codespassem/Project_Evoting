const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// ...rest of your server.js code

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Existing Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/vote', require('./routes/vote'));

// Add new Routes here
app.use('/api/elections', require('./routes/election'));
app.use('/api/candidates', require('./routes/candidate'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
