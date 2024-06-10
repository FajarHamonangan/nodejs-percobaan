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
    `UPDATE karyawan
    SET nama = 'Gaara', alamat = 'Sunagakure'
    WHERE id = 8;`
    
    
    database.query(sql, function (errorSql, hasil) {
            if (errorSql) throw errorSql
            // console.log(hasil)
            if (hasil.affectedRows > 0) {
                console.log(`berhasil edit ${hasil.affectedRows} data`)
            } else {
                console.log('gagal mengedit data')
            }
        })

    database.end()
} catch (error) {
    console.log(error)
}