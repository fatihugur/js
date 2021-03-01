//ELEMENTS
// instanceOF

HTMLElement;
document.body instanceof HTMLElement; // true /body html'in türediği bir yer midir

//CREATEELEMENT - APPENDCHILD - INSERTBEFORE // core java
var title = document.createElement("h1");
title.innerText = "Hello!";
document.body.appendChild(title); // h1 içinde döküman sonuna hello! ekler
var paragraf = document.createElement("p");
paragraf.innerText = "How are you?";
document.body.appendChild(paragraf);
document.body.insertBefore(paragraf, title); //paragraf başlığın önünde
title.setAttribute("style", "color:red"); // başlığı kırmızı yaptık
title.style.color = "orange"; // aynı şey turuncu yap demek
//jquery element creation var
title.style.marginTop = 40;
