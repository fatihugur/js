//DOM  Document Object Model
//HTML elementlerini kümelendirme ve nesneler içinde kullanma
//window nesnesi// en global değişken window - en üst nesnemiz
window.alert("Hello");
//Büyük harfli fonksiyon, küçük harfliler class
window.btoa("Fatih"); // şifreler //"RmF0aWg="
window.atob("RmF0aWg="); // sifreyi çözer // "Fatih"
window.decodeURIComponent("Fatih"); // Fatih
window.encodeURIComponent("Akın"); //encode // "Ak%C4%B1n" döndü

window.setInterval(function () {
  console.error("Hello");
}, 1000); // yazmaya devam eder // belirli süre aralıklarıyla basar/çalıştırır
window.setTimeout(function () {
  console.error("Hello");
}, 1000); // bir kere yazar bırakır/ tekrar etmez

var timer = setTimeout(function () {
  console.error("Hello");
}, 1000);
clearTimeout(timer); // timeout'u durdurur

var timer = setTimeout(function () {
  console.error("Hello");
}, 1000);
setTimeout(function () {
  clearTimeout(timer);
}, 999); // timeout'u durdurur// hiçbir zaman timer fonksiyonu çalışmaz
// bu örnekte bir milisaniye önce durdurdu.

var i = 10;
var timer;
timer = setInterval(function () {
  console.error(--i);
  if (i == 0) clearInterval(i);
}, 1000);
