const express = require('express');
const app = express();

app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('hello.ejs');
});

app.listen(3000);