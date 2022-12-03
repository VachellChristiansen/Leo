const express = require('express');
const app = express();
const supabase = require('./connection');
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('cocokin')
})

app.post('/signup', async (req, res) => {
  console.log(req.body)
  const { data: signup, error: signupErr } = await supabase.auth.signUp({
    email: req.body.email,
    password: req.body.password
  })
  const { data: signupData, error: signupDataError } = await supabase
    .from('profiles')
    .insert([
      { id: signup.user.id, name: req.body.name },
    ])
  console.log(signup, signupErr)
  console.log(signupData, signupDataError)
  res.redirect('/')
})

app.post('/signin', async (req, res) => {
  console.log(req.body)
  const { data: signin, error: signinErr } = await supabase.auth.signInWithPassword({
    email: req.body.email,
    password: req.body.password
  })
  console.log(signin, signinErr)
  let { data: userData, error: userDataErr } = await supabase
  .from('profiles')
  .select('name')
  .eq('id', signin.user.id)
  console.log(userData)
  res.render('data', {user: userData[0].name})
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})