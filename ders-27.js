//DOM  Document Object Model
//HTML elementlerini kümelendirme ve nesneler içinde kullanma
//window nesnesi// global değişken window
window.alert("Hello");
//Büyük harfli fonksiyon, küçük harfliler class
window.btoa("Fatih"); // şifreler //"RmF0aWg="
window.atob("RmF0aWg="); // sifreyi çözer // "Fatih"
window.decodeURIComponent("Fatih"); // Fatih
window.encodeURIComponent("Akın"); //encode // "Ak%C4%B1n" döndü
window.setInterval(function () {
  console.error("Hello");
}, 1000); // yazmaya devam eder
window.setTimeout(function () {
  console.error("Hello");
}, 1000); // bir kere yazar bırakır

var timer = setTimeout(function () {
  console.error("Hello");
}, 1000);
clearTimeout(timer); // timeout'u durdurur

var timer = setTimeout(function () {
  console.error("Hello");
}, 1000);
setTimeout(function () {
  clearTimeout(timer);
}, 999); // timeout'u durdurur
