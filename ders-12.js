//geçici variable isimleri

var _i = 0;
while (_i < 10) {
  console.log("Hello");
  _i++;
}

function addUser() {
  var _userID = userName();
  get(`/user/${_userID}`);
}

var a = 3;
var b = 2;

//tmp geçici bu yüzden alt tire koyduk
var _tmp = a;
var a = b;
var b = _tmp;
