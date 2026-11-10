const daftarBarang = ["Buku Tulis", "Pensil", "Penghapus", "Spidol"];
const barangBaru = "Pulpen";
const barangDicari = "Penghapus";
const barangDihapus = "Spidol";

console.log("=== PENGELOLAAN PERLENGKAPAN KELAS ===");

console.log(`Jumlah barang awal: ${daftarBarang.length}`);

console.log("\n[Tambah Barang]");
if (barangBaru !== "") {
    daftarBarang.push(barangBaru);
    console.log(`${barangBaru} berhasil ditambahkan.`);
} else {
    console.log("Nama barang tidak boleh kosong.");
}

console.log("\n[Pencarian Barang]");
if (daftarBarang.includes(barangDicari)) {
    const indexCari = daftarBarang.indexOf(barangDicari);
    console.log(`${barangDicari} ditemukan pada indeks ${indexCari}.`);
} else {
    console.log("Barang tidak tersedia.");
}

console.log("\n[Hapus Barang]");
const indexHapus = daftarBarang.indexOf(barangDihapus);
if (indexHapus !== -1) {
    daftarBarang.splice(indexHapus, 1);
    console.log(`${barangDihapus} berhasil dihapus.`);
} else {
    console.log("Barang tidak dapat dihapus.");
}

console.log("\n=== DAFTAR BARANG TERBARU ===");
if (daftarBarang.length === 0) {
    console.log("Daftar barang kosong.");
} else {
    for (let i = 0; i < daftarBarang.length; i++) {
    console.log(`${i + 1}. ${daftarBarang[i]}`);
    }
    console.log(`Total barang: ${daftarBarang.length}`);
}