let nama = 'Fajar Hamonangan'
let alamat = 'Jakarta'

function biodata() {
    return `Nama: ${nama} \n Alamat: ${alamat} \n Pekerjaan: pengusaha`
}
            
            

// console.log(nama + ' '+alamat)
module.exports = {
    nama,
    alamat,
    cetakbiodata: biodata()
}