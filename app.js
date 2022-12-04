const express = require('express');
const app = express();
const supabase = require('./connection');
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('cocokin')
})

app.get('/post', (req, res, next) => {
  console.log(req.query);
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})