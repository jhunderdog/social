const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./routers/users');

// const db = require('./config/key').mongoURI;)
app.use("/users", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at ${PORT}`);