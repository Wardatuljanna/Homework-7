// Import modul geometry.js
const geometry = require('./geometry');

// Menghitung luas dan keliling
const sisiPersegi = 5;
console.log('Luas Persegi:', geometry.luasPersegi(sisiPersegi));
console.log('Keliling Persegi:', geometry.kelilingPersegi(sisiPersegi));

const panjangPersegiPanjang = 4;
const lebarPersegiPanjang = 6;
console.log('Luas Persegi Panjang:', geometry.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));
console.log('Keliling Persegi Panjang:', geometry.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));