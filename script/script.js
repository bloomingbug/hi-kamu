const nama = prompt("Tulis nama kamu dulu dong ☺️");
const tombolMau = document.getElementById("mau");
const tombolGak = document.getElementById("gak");
const namaKamu = document.getElementById("namakamu");
const gambarTembak = document.getElementById("tembak");
const paragraph = document.getElementsByTagName("p")[0];

namaKamu.innerHTML = nama;

tombolMau.addEventListener("click", function () {
  gambarTembak.setAttribute(
    "src",
    "https://c.tenor.com/r2NutC5DjRkAAAAM/cute-in-love.gif"
  );
  const teks = "I Love You";
  paragraph.innerHTML = teks;
  tombolGak.style.position = "static";
  this.preventDefault();
});

tombolGak.addEventListener("click", function () {
  gambarTembak.setAttribute(
    "src",
    "https://c.tenor.com/CfAxiZhADyoAAAAS/quby-chan-crying.gif"
  );
  const teks = "Makasi :'(";
  paragraph.innerHTML = teks;

  const i = Math.floor(Math.random() * 300) + 1;
  const j = Math.floor(Math.random() * 300) + 1;

  this.style.position = "absolute";
  this.style.left = i + "px";
  this.style.top = j + "px";
  this.preventDefault();
});
