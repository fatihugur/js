//VARIABLES -- DEĞİŞKENLER
var name = "Fatih";
var surname = "Ugur";
var fullName = name + " " + surname;

var 234 = 'Fatih'; // kullanılmaz
var 1name = 'Fatih'; // kullanılmaz
var name1 = "Fatih";

var _name = "Fatih";
var -name = "Fatih"; // kullanılmaz
var $name =" Fatih";

var $ = "Jquery";
var _ = "underscore";
//variables decleration // 
var name ="Fatih",
    surname="Ugur",
    fullName = name + '' + surname;

//
name = "Fatih" // yazılabilir ama...

function fonksiyon (){
    var name = 'Hello' // var kullanılırsa içinde kalır yoksa global olur
    console.log(name);
}
//fonksiyon içinde tanımlanan değişken orada kalır


function fonksiyon() {
    isim = "Fatih";
    console.log(isim);
}