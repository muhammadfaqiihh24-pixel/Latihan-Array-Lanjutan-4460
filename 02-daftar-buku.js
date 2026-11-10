const daftarBuku = [
    "HTML Dasar",
    "CSS Dasar",
    "JavaScript Dasar",
    "PHP Dasar",
];

console.log("Daftar buku awal:",daftarBuku);
const indexCSS = daftarBuku.indexOf("CSS Dasar");
console.log("indeks CSS Dasar:",indexCSS);

if (indexCSS !== -1) {
  daftarBuku.splice(indexCSS, 1, "CSS Modern");
}

const indexJS = daftarBuku.indexOf("JavaScript Dasar");
if (indexJS !== -1) {
  daftarBuku.splice(indexJS + 1, 0, "Git Dasar");
}

const indexPHP = daftarBuku.indexOf("PHP Dasar");
if (indexPHP !== -1) {
  daftarBuku.splice(indexPHP, 1);
}

console.log("Daftar buku setelah perubahan:", daftarBuku);
console.log("Jumlah buku tersisa:", daftarBuku.length);