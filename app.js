const express = require('express');
const app = express();
const supabase = require('./connection')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('data', { data: '' })
});
app.get('/cocokin', (req, res) => {
  res.render('cocokin')
});
app.post('/postUser', async (req, res) => {
  // const { user, session, error } = await supabase.auth.signUp(
  //   {
  //     email: req.body.email,
  //     password: req.body.password,
  //   },
  //   {
  //     data: {
  //       first_name: req.body.firstName,
  //       last_name: req.body.lastName,
  //     }
  //   }
  // )
  const { user, session, error } = await supabase.auth.signUp({
    phone: '+6283895595877',
    password: 'vachell',
    data: {
      first_name: req.body.firstName,
      last_name: req.body.lastName,
    }
  })
  
  // After receiving an SMS with One Time Password.
  // let { session, error } = await supabase.auth.verifyOTP({
  //   phone: '+6282289560353',
  //   token: '123456',
  // })
  console.log(user, session, error)
  res.redirect('/')
});

app.post('/cocok', async (req, res) => {
  const token = req.body.cocok;
  const phone = '+6283895595877'
  const { data, error } = await supabase.auth.verifyOtp({ phone, token, type: 'sms'})
  console.log(data, error)
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})