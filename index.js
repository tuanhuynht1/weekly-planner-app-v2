// use express web server
const express = require('express');
const app = express();

// import path and routers
const path = require('path');
const userRouter = require('./routes/userRoute');
const todosRouter = require('./routes/todosRoute');

// set up environment variables in .env 
const dotenv = require('dotenv');
dotenv.config();

// middleware 
app.use(express.static(path.join(__dirname,'/client/build')));  // serve React client
app.use(express.json());    // parse request body as json
app.use('/user', userRouter);     // use apiRouter with base route /user
app.use('/todos', todosRouter);     // use apiRouter with base route /todo

// run React production build
app.get('*', (req,res) => res.sendFile(path.join(__dirname+'/client/build/index.html')));

// start up server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log('PORT:', PORT));