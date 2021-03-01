//SCOPE - CONTEXT  HOISTING

// var = > variable
// let = > lets iets
//const = > tanim/ const a = 1 // const a = 2 olmaz.. / iki kere tanımlayamazsınız


for (var i = 0; i < 10; i++) {
    console.log(i); // var i'yi fonksiyon dışında da tanır
}

// BLOCK SCOPE
for (let i = 0; i < 10; i++) {
    console.log(i); // let i'yi sadece fonksiyon içinde tutar
}

//SCOPE  var-- global değişken alır ve kullanmaya devam eder
var i = "fatih";

(function (){
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}) ()

console.log(i);


//HOISTING

(function (){
    var a = 1;
    console.log(3);
    var b = 2;

})

//Javascript bunu şuna dönüştürür // var ı başa alıp yazar buna HOISTING başa çekme deniyor/ 

(function (){
    var a, b;
    a= 1;
    console.log(3);
    b = 2;

})

//HOISTING /değişken variable  ve fonksiyon deklarasyonları yukarıya çekilir (hoist) buna denir

(function (){
    var a = 1;
    console.log(b);
    function b(){
        return 1;
    }
}) ()

//aslında buna dönüşür- js var ve function başa çeker..
(function (){
    var a = 1;
    function b(){
        return 1;
    }
    console.log(b);
}) ()

// fonksiyon örneği - bir başka örnek

(function (){
    return b();

    function b(){
        return 1;
    }
}) ()

//aslında

(function (){
    function b(){
        return 1;
    }
    return b();
}) ()
// return 1


// var fonksiyon örneği

(function () {
    return b();    
    var b = function(){
        return 1;
    }
})()

// aslında
(function () {
    var b;
    return b();    
    b = function () {
        return 1;
    }
})()


// CONTEXT => this

function a() {
    console.log(this);
} ();

// bir fonksiyonun bağlı olduğu obje onun context'idir
// fonksiyon bağlı olduğu objeye this ile ulaşır


var fatih = {

    name: "Fatih",
    surname: "Ugur",
    fullname: function(){
        return this.name + " " + this.surname;
    }
}

fatih.fullname(); // "Fatih Ugur"
fatih.fullname.call({name: "Yavuz", surname: "Ugur"}) // "Yavuz Ugur"

//CONTEXT SWITCHER - bağlı olduğu objeyi değiştiriyor
// .bind - bağla
// .call - çağır
//. apply - çağır ama parametreler dizi olacak şekilde

// BIND
var yavuzFullname = fatih.fullname.bind({name:"Yavuz", surname: "Ugur"}) //
yavuzFullname () // "Yavuz Ugur: 1"

var fatih = {

    name: "Fatih",
    surname: "Ugur",
    fullname: function(){
        function b (){
            return this.name;
        }
        return b() + " " + this.surname;
    }
}
fatih.fullname() // "Ugur"

// bu yukarıdaki hatalı bug veren yaklaşım
 // düzeltmek için birinci yöntem
// KLASİK YAZIM
 var fatih = {

    name: "Fatih",
    surname: "Ugur",
    fullname: function(){
        var that = this; 
        function b (){
            return that.name;
        }
        return b() + " " + this.surname;
    }
}
fatih.fullname() // "Fatih Ugur" // bug vermedi

//DAHA DOĞRUSU
// ES5
var fatih = {

    name: "Fatih",
    surname: "Ugur",
    fullname: function(){
        function b (){
            return this.name;
        }
        return b.call(this) + " " + this.surname;
    }
}
fatih.fullname() // "Fatih Ugur"

//ES6 => üstündeki fonksiyonu kendine bağlıyor

var fatih = {

    name: "Fatih",
    surname: "Ugur",
    fullname: function(){
        const b = () => this.name;
        return b() + " " + this.surname;
    }
}
fatih.fullname() // "Fatih Ugur"


