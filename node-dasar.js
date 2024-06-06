let nama = 'Fajar'
let alamat = 'Jakarta'
let gaji = 700000 *30 - 70000





const http = require('http')

let server = http.createServer((req,res) => {
    // mendefinisikan status code dan tipe konten yang ingin diberikan ke user

    res.writeHead(200, { 'Content-Type': 'text/html' });
    // isi konten
    
    res.end('<h1>'+nama+'</h1>' + ' ' + alamat + ' ' + gaji)
})

server.listen(3000, ()=>{
    console.log('server sudah siap')
})