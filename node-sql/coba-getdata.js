// panggil modul mysql dari node_modules
// const { error } = require('console')
const mysql = require('mysql2')

// konfigurasi database mysql yang ingin digunakan
const database = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajar_database',

})

// menyambung atau membuka koneksi
database.connect()

// 
// try {
//     database.query('SELECT * FROM karyawan', function(error, hasil) {
//         if (error) {
//             throw error
//         } else {
//             console.log(hasil)
//         }

//     })
// } catch (err){
//     console.log(err)
// }

try {
    database.query('SELECT * FROM karyawan', function(error, hasil) {
        if (error) throw error

        // untuk melihat data yang dihasilkan dari syntax sql yang ditulis
        // console.log(hasil)
            
        // data yang sudah diolah
        for (const i in hasil) {
            let notelp = ''
            if (hasil[i].no_telepon) {
                notelp = hasil[i].no_telepon
            } else {
                notelp = '-'
            }
            console.log(hasil[i].nama + 'No Telp: ' + notelp )
        }

    })
    database.end()
} catch (err){
    console.log(err)
}