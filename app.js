const express = require('express');
const app = express();
const supabase = require('./connection')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
});

app.post('/insert', async (req, res) => {
  //query
  // console.log(req.body);
  const { data: rutePesawat, error: errorRute } = await supabase
  .from('rutePesawat')
  .select(`*, pesawat (namaMaskapai) , asal: provinsiAsal (namaProvinsi), tujuan: provinsiTujuan (namaProvinsi)`)
  .eq('ruteID', 'CGDPEGA2')
  console.log(rutePesawat)

  const { data: kataLeoGabisa, error: errorKataLeoGabisa } = await supabase.from('ruteKereta').select('*, kereta (namaKereta) , asal: kotaAsal (namaKota), tujuan: kotaTujuan (namaKota)').eq('ruteID', 'GMGDEAPY1')
  console.log(kataLeoGabisa[0].asal.namaKota)
});

app.listen(3000, () => {
  console.log('http://localhost:3000')


  // test gitthub

  // push kedua
})