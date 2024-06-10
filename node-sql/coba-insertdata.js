const mysql = require('mysql2')
const database = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajar_database',

})
database.connect()

try {
    let sql =
    database.query (
        `INSERT INTO karyawan (nama, alamat, no_telepon, gol_darah, jenis_kelamin, departemen_id, jabatan_id)
        VALUES 
        ('Mesut Ozil', 'Jerman', '082333445567', 'O', 'L', 2, 4),
        ('Itachi', 'Konohagakure', '082333445567', 'O', 'L', 2, 4)`
    )
    
    database.query(sql, function (errorSql, hasil) {
            if (errorSql) throw errorSql
            // console.log(hasil)
            if (hasil.affectedRows > 0) {
                console.log(`berhasil insert ${hasil.affectedRows} data`)
            } else {
                console.log('gagal menambah data')
            }
        })

    database.end()
} catch (error) {
    console.log(error)
}