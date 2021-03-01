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
  if (i == 0) clearInterval(timer);
}, 1000);  // set interval /timer fonksiyonu/ 

//Console methodları
//ASSERT- ilk parametrenin true olmasını sağlar
console.assert.length; // parametre sayısını verir
(function (x,y) {}.length); //bir fonksiyona length sorarsanız size parametre sayısını verir
// burda 2 paremetre olarak length verecek
console.assert(1==1);
console.assert(1==2 '1 ile 2 esit degil'); 

console.clear; // console temizler
// CONSOLE DIR  - dökümünü alabiliyoruz
console.dir(window)//
console.dir(new String("Fatih"));
/*

String
0: "F"
1: "a"
2: "t"
3: "i"
4: "h"
length: 5
__proto__: String
[[PrimitiveValue]]: "Fatih"

*/

console.table({ a: 1}); // table oluşturuyor
console.table([{ a: 1}]);  // arrey table oluşturdu
console.info("asd");
console.debug();
//console.group(); consoli içinde herşeyi grup içine yazıyor groupEnd bitiriyor / debug envorement düzgün oluyor

console.group("hello");
console.log(1);
console.groupEnd();

window.print(); // yazıcı çıktısı alır
window.onclick = function (){ alert(1);} //pencerede alert basıyor click /tıklandığından.
window.onmouesmove = function(e){ console.log(e);} //mouse hareket ettikçe consolde x ve y pozisyonlarını kaydeder

//isNaN - değilleme - not a number
window.isNaN("fatih"); //not a number // true
window.isNaN("10"); //not a number // false
//confirm
confirm("hey hello");// alarmdaki tavrınıza göre true/false dönüyor
//confirm prompt("What is your name?")

//JSON.parse() window.eval// kullanma
window.eval();
data = '{"a": 1}'
//eval('(' + data + ')'); // fonksiyon çalaştırıyor

JSON.parse(data);

//fetch
window.fetch("https://google.com"); //data çekmek için

