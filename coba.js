function cetakNama(nama) {
    return `Hallo, nama saya ${nama}`;
}
function cetakkalimat(kal) {
    return `ini kalimat yang saya buat ${kal}`;
}

const pi = 3.14;
const mahasiswa = {
    nama: "John",
    cetakmhs: function() {
        return `Nama mahasiswa: ${this.nama}`;
    }
};

class Orang {
    constructor() {
        this.nama = "Ranti";
    }
}

module.exports = {
    cetakNama: cetakNama,
    cetakkalimat: cetakkalimat,
    pi: pi,
    mahasiswa: mahasiswa,
    orang: Orang
};
module.exports.cetakNama = cetakNama;
module.exports.cetakkalimat = cetakkalimat;
module.exports.pi = pi;
