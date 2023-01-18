//import express, body-parser
const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/account');
const bankRoutes = require("./routes/bank");
const account = require('./models/account');


//create express server instance  
const server = express();

//middlewares
server.use(bodyParser.json());

//routes
server.use(accountRoutes);
server.use(bankRoutes);


// connect to databse start server
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://codetrainUser:M2XxMok0ktxuIlxZ@cluster0.d8ilg6a.mongodb.net/codetrain?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true}
)
.then(result => {

    server.listen(3000, () => console.log('server is ready'))
}).catch(err => console.log(err));
