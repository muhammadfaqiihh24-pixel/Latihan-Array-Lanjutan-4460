const nilaiUlangan = [78, 60, 95, 72, 88, 75];
const batasTuntas = 75;

console.log("=== DAFTAR NILAI ULANGAN ===");
for (let i = 0; i < nilaiUlangan.length; i++) {
    console.log(`Siswa ${i + 1}: ${nilaiUlangan[i]}`);
}

let tuntas = 0;
let belumTuntas = 0;

for (const nilai of nilaiUlangan) {
    if (nilai >= batasTuntas) {
    tuntas++;
    } else {
    belumTuntas++;
    }
}

console.log("\n=== REKAPITULASI ===");
console.log("Jumlah Siswa:", nilaiUlangan.length);
console.log("Jumlah Tuntas:", tuntas);
console.log("Jumlah Belum Tuntas:", belumTuntas);