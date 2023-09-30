// Fungsi untuk menghitung luas persegi
function luasPersegi(sisi) {
    return sisi * sisi;
  }
  
  // Fungsi untuk menghitung keliling persegi
  function kelilingPersegi(sisi) {
    return 4 * sisi;
  }
  
  // Fungsi untuk menghitung luas persegi panjang
  function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
  }
  
  // Fungsi untuk menghitung keliling persegi panjang
  function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
  }
  
  // Export semua fungsi agar bisa digunakan di file lain
  module.exports = {
    luasPersegi,
    kelilingPersegi,
    luasPersegiPanjang,
    kelilingPersegiPanjang,
  };