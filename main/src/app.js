const express = require('express');
const userRoutes = require('../src/route/userRoutes');
const app = express();
const path = require('path')



app.use(express.static(path.join(__dirname, '../public')));
app.use('/',userRoutes);




module.exports = app;