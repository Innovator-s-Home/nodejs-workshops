const express = require('express');
const reqFilter= require('./middleware');
const app = express();


// app.use(reqFilter);
app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', reqFilter, (res, resp) => {
    resp.send('Welcome to Users page')
});

app.get('/about', (res, resp) => {
    resp.send('Welcome to About page')
});

app.get('/contact', reqFilter, (res, resp) => {
    resp.send('Welcome to contact page')
});


app.listen(5000)
