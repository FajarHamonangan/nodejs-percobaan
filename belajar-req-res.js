const http  = require('http')
const fs    = require ('fs')
const port  = 3000


let server = http.createServer( function(request, respon) {
    if (request.url == '/') {
        respon.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream('./view/utama.html').pipe(respon)
        // fs.createdReadstream() => membaca file yang diinginkan
        // pipe() => kirim sebagai apa, file yang sudah dibaca


    } 
    else if (request.url == '/beranda'){
        respon.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream('./view/beranda.html').pipe(respon)


    } 
    else if (request.url == '/profil'){
        respon.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream('./view/profil.html').pipe(respon)
    }

    else {
        respon.writeHead(404, {'Content-Type': 'text/html'})
        respon.write('<h1>Putar Balik Om, Filenya Ngga Ada!</h1>')
        respon.end()


    }
})

server.listen(port, ()=>{
    console.log(`server sudah on, buka http://localhost${port}`)
})