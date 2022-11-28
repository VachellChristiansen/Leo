const express = require('express');
const app = express();
const supabase = require('./connection')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('data')
});

app.post('/test', async (req, res) => {
  const penumpang = req.body.penumpang
  const detail = req.body.detail

  penumpang.forEach(async (orang, index) => {
    const { data, error } = await supabase
    .from('testArrayInput')
    .insert([
      { 
        nama: orang, 
        detail: detail[index] 
      }
    ])
  })


  // for(let i = 0; i < penumpang.length; i++) {
  //   const { data, error } = await supabase
  //   .from('testArrayInput')
  //   .insert([
  //     { 
  //       nama: penumpang[i], 
  //       detail: detail[i]
  //     }
  //   ])
  // }
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})