//DÖNGÜLER

//SONSUZ DÖNGÜ -çalıştırmayın
function merhaba() {
  console.log("Merhaba");
  merhaba(); // recoursif // kendi kendini çağıran fonksiyon
}

var i = 0;
function merhaba(i) {
  console.log("Merhaba");
  if (i > 0) {
    merhaba(i - 1);
  }
}
merhaba(10); // 11 kez merhaba yazar

//IMPERATIEF  // WHILE KOSULU

var i = 0;

while (i < 10) {
  console.log("merhaba");
  i += 2;
}

// DO WHILE KOSULU- en az bir kere çalışır

var i = 0;

do {
  console.log("merhaba");
  i += 2;
} while (i < 0);

//FOR LOOP
for (dek; koşul; bitiş)
  // AYNI formülün while for döngüsü ile tatbiki

  //deklerasyon
  var i = 0;

while (/* koşul */ i < 10) {
  console.log("merhaba");
  /*bitiş */ i += 2;
}

// FOR Loop ile aynı formül
for (var i = 0; i < 10; i += 10) {
  console.log("merhaba");
}

//FOR IN

var nesne = { a: 1, b: 2 };
for (var i in nesne) {
  console.log(i);
}

// CONTINUE // BREAK
var i = 0;
while (true) {
  if (i == 5) {
    i++;
    continue;
  }
  console.log("Merhaba" + i);
  if (i == 10) break;
  i++;
}
