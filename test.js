const input = "12/30/2022Z"


const tanggal = new Date(input)

const tanggalDoang = () => {
  return [tanggal.getDate(), tanggal.getMonth() + 1, tanggal.getFullYear()].join('-')
}
console.log(tanggal)
console.log(tanggalDoang())