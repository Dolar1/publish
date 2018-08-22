const express = require('express');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');


//passport config..
require('./config/passport')(passport);

//loading routes
const auth = require('./routes/auth');

app.get('/', (req, res)=>{
	res.send ('i believe this will work');
});

//using  routes
app.use('/auth', auth);

port = process.env.PORT || 9000 ;

app.listen(port, (req, res)=>{
	console.log(`listening on port ${port}`);
});