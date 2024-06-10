const mysql = require('mysql2')
const database = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajar_database',

})
database.connect()

try {
    let sql = `DELETE FROM karyawan WHERE id = 7;`
    
    database.query(sql, function (errorSql, hasil) {
            if (errorSql) throw errorSql
            // console.log(hasil)
            if (hasil.affectedRows > 0) {
                console.log(`berhasil hapus ${hasil.affectedRows} data`)
            } else {
                console.log('gagal menghapus data')
            }
        })

    database.end()
} catch (error) {
    console.log(error)
}