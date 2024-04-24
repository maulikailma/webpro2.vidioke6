// const fs = require("fs"); //core module
// const cetaknama = require("./coba"); //local module
// const moment = require("moment");//third npm
const coba = require("./coba");
// console.log(cetaknama("Ranti"));
// console.log(coba);
console.log(
    coba.cetakNama(`Ranti`),
    coba.pi,
    coba.cetakkalimat(`belajar nodejs`),
    coba.mahasiswa.cetakmhs(),
    new coba.orang()
);