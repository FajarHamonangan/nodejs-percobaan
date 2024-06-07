let gajiPokok = 4000000
let tunjanganJabatan = 750000
let bpjs = (2.5/100) * gajiPokok
let netGaji = gajiPokok + tunjanganJabatan - bpjs




function slipGaji(nama, periode) {
    let hasil =
    `Gaji Karyawan Periode Juni 2024 \n` +
    `=============================== \n` +
    `Gaji Pokok: Rp${gajiPokok.tolocaleString('id-ID')} \n`
    `Tunjangan Jabatan: Rp${tunjanganJabatan.tolocaleString('id-ID')} \n`
    `Potongan BPJS: Rp-${bpjs.tolocaleString('id-ID')} \n`
    `Net Gaji : Rp ${netGaji.tolocaleString('id-ID')} \n`

    return hasil
}

module.exports = {
    cetak_slipGaji: slipGaji(),
}