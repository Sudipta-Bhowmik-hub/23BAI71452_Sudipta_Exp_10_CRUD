const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/crudDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(3000, () => console.log('Server running on port 3000'));
