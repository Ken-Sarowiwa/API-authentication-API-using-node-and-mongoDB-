// import all the necessary dependecies for the project, express is a backened framework, mongoose is module that helps make connection to the database 

import express from 'express';
import { json } from 'express/lib/response';
const app = express();
import { Mongoose } from 'mongoose';
const auth = require(/Helpers/jwt.js);
const unless = require(express-unless);
const users = require(controllers/controllers.js);
const errors = require(Helpers/Errorhandler.js);

// middleware, a middle ware is a piece of inbuilt functionalities that allow our application to connect seamlessely and interact with other parts of node
auth.authenticateToken.unless = unless 
app.use(auth.authenticateToken.unless({
    path: [
        { url: '/users/login', methods: ['POST']},
        { url: '/users/register', methods: ['POST']}
    ]
}))
app.use(json()) // middleware for parsing JSON data
app.use('users ', users) // middleware for handling user requests 
app.use(errors.Errorhandler)// middleware for handling errors

// mongo DB setup 
const uri = "mongodb+srv://cluster0.nz9r8.mongodb.net/myFirstDatabase";
Mongoose.connect(uri, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});
const db = Mongoose.connection;
db.on(('error', console.error.bind(console, 'connection error:')));
db.once('open', () => console.log(`Connected to mongo at ${uri}`));

app.listen(3002);