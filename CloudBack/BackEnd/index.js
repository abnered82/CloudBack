

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./src/database/configdb');

// Create an Expres's application
const app = express();

dbConnection();

app.use(express.json());
app.use(cors());





app.use('/', require('./src/routes/products'));


app.listen(process.env.PORT, () => {
    console.log('Running in the port', process.env.PORT);
});

module.exports = app;