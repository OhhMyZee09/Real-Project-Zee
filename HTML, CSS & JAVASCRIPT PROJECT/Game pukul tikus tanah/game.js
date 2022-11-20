const tanah = document.querySelectorAll(`.tanah`);
const tikus = document.querySelectorAll(`.tikus`);
const score = document.querySelector(`.score`);
// ? untuk mengecek agar tanah yg muncul tidak terjadi berulang 2 kali,maka dibuat function tanah sebelumnya

let tanahSebelumnya;
let end;
let nilai;

function tanahRandom(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];

  if (tRandom === tanahSebelumnya) {
    tanahRandom(tanah);
  }

  tanahSebelumnya = tRandom;
  return tRandom;
}

// ? function waktu random agar test kesulitannya,parameter functionnya adalah min dan max waktu yang kita inginkan
function waktuRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// ? ketika function tanahRandom aktif,tambahkan class muncul di tanah dan hapus kelasnya setelah beberapa waktu
function munculTikus() {
  const tRandom = tanahRandom(tanah);
  const wRandom = waktuRandom(300, 2000);
  tRandom.classList.add(`muncul`);

  setTimeout(() => {
    tRandom.classList.remove(`muncul`);
    if (!end) {
      munculTikus();
    }
  }, wRandom);
}

// ? function start untuk ketika di klik jalankan function munculTikus,tapi setelah 10 detik lakukan sesuatu
function start() {
  end = false;
  nilai = 0;
  score.textContent = 0;

  munculTikus();
  setTimeout(() => {
    end = true;
  }, 10000);
}

// ? function untuk ketika di pukul tikusnya,scorenya nambah
function pukul() {
  nilai++;
  this.parentNode.classList.remove(`muncul`);
  score.textContent = nilai;
}

// ? untuk tikus ketika di clik tikusnya masuk ke dalam tanah lagi
tikus.forEach((t) => {
  t.addEventListener(`click`, pukul);
});
