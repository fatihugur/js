//ARRAYS
[0, 1, 2, 3, 4, 5];
var a = [0, 1, 2, 3, 4, 5, 6, 7];
//concat
a.concat(8, 9); //  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//every - some
a.every(function (item) {
  return typeof item === "number";
}) //true / hepsi rakam
  [(1, 2, "fatih")].every(function (item) {
    return typeof item === "number";
  }) // false - rakam olmayan var
  [(1, 2, "fatih")].some(function (item) {
    return typeof item === "number";
  }); // true -  bazıları demek
//fill
a.fill("fatih"); /// a'nın hepsini fatih ile değiştirir ['fatih','fatih','fatih','fatih','fatih','fatih','fatih','fatih','fatih']
var a = [0, 1, 2, 3, 4, 5, 6, 7];
//filter
a.filter((item) => item % 2 == 0); // [0,2,4,6,8] //çift basamaklıları filtreledi
//find // findIndex
a.find((item) => item == 0); // 0 sıfırıncı indextekini getiriyor
a.findIndex((item) => item % 2 == 1); // 1 birinci indexi veriyor
//forEach
a.forEach(function (item) {
  console.log(item);
}); // a array'i içindeki rakamları basar yukarıdan aşağıya
//includes - indexOf
a.includes(10); //false çünkü array içinde yok
a.indexOf(11); // -1 array içindeki 11. eleman olmadığı için -1
//join - item
a.join(","); // virgülle birleştirir. array item'larını stringe çevirip veriyor
a.map((item) => item * 2); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] // array içindeki item'leri 2 ile çarpıp yeni array verir

// pop - push
a.pop(); // sondan alır -9 u alır a'yı da [0,1,2,3,4,5,6,7,8] olarak değiştirir
a.push(9); // 9'u array sonuna ekler

// array reverse / shift / slice / unshift/ sort
a.reverse(); // arrayi terse çevirir [9,8,7,6,5,4,3,2,1,0]
a.shift(); // baştan alır // 0'ı alır arrayin kalanını verir

a.slice(0, 2); //0'dan 2. arraya kadar alır
a.unshift(0); // en başa atar
a.short(); // array karışık da olsa düzenler

["dogukan", "fatih", "ali", "zeki", "şeref"].sort((a, b) =>
  a.localCompera(b, "tr")
);
//  ['ali', 'dogukan', 'fatih', 'şeref', 'zeki'] // array alfabetik döner
