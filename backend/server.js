const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connected successfully');
});

const bloodRouter = require('./routes/blood');
const donerRouter = require('.routes/doner');

app.use('/blood', bloodRouter);
app.use('/doner', donerRouter)

app.listen(port, () => {
    console.log('Server is running on port: 5000');
});
