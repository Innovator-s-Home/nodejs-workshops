const express = require('express');
const path = require('path');

const app = express();
console.log(__dirname)
const publicPath=path.join(__dirname,'public')  //add public path to the root directory

app.use(express.static(publicPath));

app.listen(5000);