const express = require('express');
const app =express()
const loginRoute = require('./Routes/Login')
const signupRoute = require('./Routes/signup')
const cors = require('cors')
require('dotenv').config();
require('./Mongoose')();
port = 3300;
app.use(cors())
app.use(express.json())
app.use('/login', loginRoute)
app.use('/signup', signupRoute)

app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});
