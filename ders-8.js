//ANLAMLI KAYNAK KODU
//okunabilir ve düzenlenebilir olmalı

// Şu anki kullanıcı ID'si
var a = 1;

function b() {
  c(a);
}

//VEYA

function b() {
  //kullanıcı ID'sini Kullanıcı silmeye gönder.
  c(a);
}

//YERİNE ŞU ŞEKİLDE YAZMALI

var currentUserID = 1;
function deleteCurrentUser() {
  deleteUser(currentUserID);
}
//yazmalı ve kodu okunur anlaşılır yapmalı
//Mümkün olduğunca ingilizce
