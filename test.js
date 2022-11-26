const input = "12/30/2022"
const inputdiedit = input + "Z"


const tanggal = new Date(inputdiedit)

const tanggalDoang = () => {
  return [tanggal.getDate(), tanggal.getMonth() + 1, tanggal.getFullYear()].join('-')
}
console.log(tanggal)
console.log(tanggalDoang())