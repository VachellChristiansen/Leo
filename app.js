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
  //query
  const { data: rutePesawat, error: errorRute } = await supabase
  .from('rutePesawat')
  .select(`*, pesawat (namaMaskapai) , from: provinsiAsal (namaProvinsi), to: provinsiTujuan (namaProvinsi)`)
  .eq('ruteID', 'CGDPEGA2')
  console.log(rutePesawat)

  const { data: kataLeoGabisa, error: errorKataLeoGabisa } = await supabase.from('rutePesawat').select('*')
});
app.listen(3000, () => {
  console.log('http://localhost:3000')


  // test gitthub

  // push kedua
})