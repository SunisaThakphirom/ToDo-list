const express = require('express');
const app = express();
const bodyparser = require('body-parser');
require('dotenv').config();

const db = require('./utils/database.js');
//const host = process.env.APP_HOST || 'localhost';
const port = process.env.APP_PORT || 3000;

const route = require('./routers/route.js')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


app.use(route);

app.use(express.static(__dirname + '/www'));

app.listen(port,() => {
    console.log("Start Server on Port "  + port);
});