//REGULAR EXPRESSION - DÜZENLİ İFADE // REG EX

// '+90 555 300 80 80'
// '35 KRL 2000'

telefon = 'Ülke kodu(+ ile başlar) + Operatör Kodu 3 haneli sayı(5 ile başlar) + 2 haneli sayı + 2 haneli sayı'
plaka = 'sehir kodu(2 haneli sayı) +  1, 2 ya da 3 harf + 2 ile 4 ramak arasında bir sayı'
phone = /(\+(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/
//telefon validitasyonu -- regexr.com kontrol edildi
/((\+|00)(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/gm.test("Merhaba benim telefonum +90 555 555 34 34")
//telefon numarasını kapatma
"Merhaba benim telefon numaram +90 533 777 33 33".replace(/(\+(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/gm,'****')
//match fonksiyonu bütün yazı içinden telefonu çıkarma
"Merhaba benim telefon numaram +90 533 777 33 33".match(/(\+(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/gm)
kenteken = /(\d{2})\s?([A-Z]{1,3})\s?(\d{2,4})/

/\d/ = /[0-9]/ // numbers
/\D/ = /[^0-9]/ // !numbers
/\w/ = /[A-Z]/ // alphabet
/\W/ = /[^A-Z]/ // !alphabet
/\s/ = //space
/\d{1,}/ =  /\d+/ // endless vanaf 1
/\d{0,}/ =  /\d*/ // vanaf 0


[abc] = a or b or c.apply.apply. = (a|b|c)
^[abc].* = //everthing begin abc
^[abc].$ = //everything begin abc and end c // ^ isareti başlama- $ son imleci



