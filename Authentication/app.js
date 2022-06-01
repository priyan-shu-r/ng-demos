const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const postRoute= require('./routes/post'); 

// app.get('/', (req,res) => {
//     res.send("Hello Nodejs");
// });

// app.get('/blog', (req,res) => {
//     res.send("Hello Blogjs");
// });

app.use(bodyParser.json());

app.use("/posts", postRoute);

// const userRoute = require('./routes/user');

// app.use("/user",userRoute);

module.exports = app;