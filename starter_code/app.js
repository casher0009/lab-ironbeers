
const express = require('express');
require('hbs');
const app     = express();
const mongoose = require('mongoose')


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

const Chela = require('./models/cervezas')


mongoose.connect('mongodb://localhost:27017/Chelas', (err)=>{
    if(err) console.log (err);
    console.log('conectado a la base de datos');

})

app.use(express.static(__dirname, 'public'));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  res.render('beers');
});

app.get('/random-beers', (req, res, next) => {
  res.render('random-beers');
});

app.listen(3000, ()=>{
  console.log('corriendo servidor')
});