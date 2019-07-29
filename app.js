// This creates a new Express server.
const express = require("express");
const app = express();

// Mongoose
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;


// connect to mongoose
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));




// Basic route so that we can render some information on our page.
app.get("/", (req, res) => {
    res.send("Hello World!!!");
});


// process.env.PORT is for deploying to heroku
const port = process.env.PORT || 5000;

// Tell Express to start a socket and listen for connections on the path.
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});