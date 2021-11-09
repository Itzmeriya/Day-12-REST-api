const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

//import routes
const snackRoute= require('./routes/snacks');
app.use('/snacks',snackRoute);

const uploadRoute= require('./routes/fileuploads');
app.use('/images',uploadRoute);

//listening
mongoose.connect("mongodb://localhost:27017/myowndb",() =>{
    console.log("Database Connected");
});
app.listen(3000);