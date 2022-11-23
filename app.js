const express = require('express');
const app = express();
const supabase = require('./connection')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
});

app.post('/insert', async (req, res) => {
  console.log(req.body)
  const { errorInsert } = await supabase.from('testing').insert({ name: req.body.name, comment: req.body.comment})
  const { data, errorSelect } = await supabase.from('testing').select()
  console.log(data)
  res.render('data');
});

app.listen(3000, () => {
  console.log('http://localhost:3000')
})