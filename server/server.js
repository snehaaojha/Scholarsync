const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const register = require('../server/routes/auth')

const authRoutes = require('./routes/auth'); // Adjust path if needed

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ScholarSync:Abhi_1208@cluster0.l3mwnuc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
  

app.use('/api/auth',register);



app.listen(5000, () => console.log('Server running on port 5000'));
