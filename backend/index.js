const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// TODO:
// Connect to MongoDB (replace 'your_database_url' with your MongoDB connection string)
// mongoose.connect('your_database_url', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

app.use('/api', require('./routes/api'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});