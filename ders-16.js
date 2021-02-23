// LOGIC OPERATORS  //KOŞULLAR - MANTIKSAL KARAR VERİCİLER

//ALL OF THEM
// ve &&  tamamı true olmalı

true && true && true; // true
true && false && true; // false

//ONE OF THEM
// || veya  birinin doğru olması yeterli

false || false || false; // false
false || false || true; // true

// X OR -kriptograhpy'de kullanılan bir opsiyon

function a() {
  console.log("a kontrol edildi, doğru");
  return true;
}
function b() {
  console.log("b kontrol edildi, doğru");
  return true;
}
function c() {
  console.log("c kontrol edildi, yanlış");
  return false;
}

a() && b() && c(); // false gördüğünde taramayı bitirir / biri yanlış olduğu için otomatik olarak yanlış döner
a() || b() || c(); // true'yi gördüğü anda taramayı bitirir / biri dahi doğru olsa, otomatik doğru döner

var name = input || "Fatih";

//KARŞILAŞTIRMA OPERATÖRLERİ

3 > 2; // BÜYÜKTÜR
2 < 3; // KÜÇÜKTÜR
3 >= 3; // BÜYÜK EŞİTTİR
2 <= 3; // KÜÇÜK EŞİTTİR
3 == 3; // EŞİTTİR
3 != 3; // EŞİT DEĞİLDİR

// IF ELSE KOŞULU   -  if() else() //EĞER - BAŞKA DURUMDA-EĞER BAŞKA İSE

if (true && true) {
  console.log("Doğru");
} else {
  console.log("Yanlış");
}

// TERNARY - üçlü kullanım

console.log(true && true ? "Doğru" : "Yanlış"); // KISA YOLUMUZ if else için

if (3 > 2 && 2 <= 5) {
  console.log("kosullar saglandı.");
}

// DEĞİL OPERATÖRÜ !

true && true; // true
!(true && true); // false

var havaDurumu = "yagmurlu";
var evdeSemsiyeVar = true;
var arabaVar = true;
var garajdakiArabaSayisi = 3;
var arabaVar = garajdakiArabaSayisi > 0;

if (havaDurumu == "yagmurlu" || HavaDurumu == "karli") {
  if (evdeSemsiyeVar) {
    console.log("Semsiyeyi al.");
    if (arabaVar) {
      console.log("Arabayla işe git");
    } else {
      console.log("Yürüyerek ise git");
    }
  } else {
    console.log("İse gitme");
  }
} else {
  if (arabaVar) {
    console.log("Arabayla işe git.");
  } else {
    console.log("Yürüyerek işe git");
  }
}

//If else koşullar programları işleten mantığı kurmamızı sağlar

var arabaSayisi = 5;
switch (arabaSayisi) {
  case 1:
    console.log("Araban güzelmiş.");
    break;
  case 2:
    console.log("Araban güzelmiş, birini bana verir misin");
    break;
  default:
    console.log("Arabalar güzelmiş");
    break;
}
