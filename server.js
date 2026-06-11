
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/notes', require('./routes/noteRoutes'));

mongoose.connect(process.env.MONGO_URI)
.then(() => {

    console.log('MongoDB Connected');

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });

})
.catch(err => console.log(err));