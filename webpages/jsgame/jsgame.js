var idznow = "glowny";
var idzdo = null;

var mojadata = {
  date: null,
  sekundy: 0,
  darmoweplnsekundy: 0,
}
var odCookies = {
  wartosccookie: null,
  zgodanacookie: 2,
}
var darmowepieniadze = {
  ileczekac: 0,
}
var przedmioty = {
  cena: 10,
  iloscp: 0,
  czy: null,
  i: null,
  cenaczesczmienna: null,
}
var coinflipvar = {
  obstawienie: null,
  obstawieniekomputer: null,
  stawka: 0,
  teststawka: 0,
}
var player = {
  id: 1,
  nick: "Ludwike",
  money: 1,}

setInterval("aktualizacjazmiennych();",1000);
setInterval("czekanie();",1000); //darmowe pln
setInterval("mojeCookieszapis();",1000);
setInterval("zmianaceny();",250); //rynek



// SKROTY  > FUNKCJI I KOMEND ALMLibrary.js
// RYNEK > jsrynek.js
// COINFLIP > jscoinflip.js
// BIBLIOTEKA JS COOKIE JS > js.cookie.min.js
// MOJE FUNKCJE COOKIES!!! POGGERS!

function mojeCookieszapis(){
  if(odCookies.zgodanacookie != 1){return;}
  Cookies.set('pieniadze',player.money, { expires: 365 });
  Cookies.set('darmoweplnczekanie',darmowepieniadze.ileczekac, { expires: 365 });
  Cookies.set('iloscp',przedmioty.iloscp, { expires: 365 });
  Cookies.set('zgodanacookie',odCookies.zgodanacookie, { expires: 365 });
  Cookies.set('datawsekundach',mojadata.sekundy, { expires: 365 });
  Cookies.set('PLN15datawsekundach',mojadata.darmoweplnsekundy, { expires: 365 });
//  konsola('Cookies zostały automatycznie zapisane!');
}

// LADOWANIE LADOWANIE LADOWANIE !!! ///
function onLoadAll(){
  mojeCookiesCheck('zgodanacookie',0,'odCookies','zgodanacookie');
  zgodacookie();
  if(odCookies.zgodanacookie != 1){return;}
  mojeCookiesCheck('darmoweplnczekanie',0,'darmowepieniadze','ileczekac');
  czekanie();
  mojeCookiesCheck('pieniadze',0,'player','money');
  mojeCookiesCheck('iloscp',0,'przedmioty','iloscp');
  mojeCookiesCheck('PLN15datawsekundach',0,'mojadata','darmoweplnsekundy');
  plnpozostalyczas();
//  mojeCookiesCheck('datawsekundach',0,'przedmioty','iloscp');

}
function aktualizacjazmiennych(){
  //pieniadze
  poID('pln').innerHTML = player.money + "$";
  konsola("Stan konta: " + player.money + "$");
  mojadata.date = new Date();
  mojadata.sekundy = Math.floor(mojadata.date.getTime() / 1000);
}

// PODSTAWOWE FUNKCJE PODSTAWOWE FUNKCJE ///
function plnpozostalyczas(){
  if(mojadata.darmoweplnsekundy != 0){
    darmowepieniadze.ileczekac = mojadata.sekundy + darmowepieniadze.ileczekac - mojadata.darmoweplnsekundy;
  }
}
function przejscie(a){
  poID(idznow).style.display = "none";
  idznow = a;
  poID(a).style.display = "block";
}

function czekanie(){

  // sprawdzanie odbioru pieniedzy numer 1
if(darmowepieniadze.ileczekac > 0){
  darmowepieniadze.ileczekac--;
  poID('odbierz1').innerHTML = darmowepieniadze.ileczekac + "s";
  poID('odbierz1').style = "background-color: red";}
//  konsola("Pozostało: " + darmowepieniadze.ileczekac + " sekund do darmowej kasy.");
else {
  poID('odbierz1').style = "background-color: #00bf00";
  poID('odbierz1').innerHTML = "Odbierz";
  mojadata.darmoweplnsekundy = 0;
// konsola("Możesz odebrać pieniądze.");
}}

// KOLEJNE FUNKCJE
function darmowepln(){
  if(darmowepieniadze.ileczekac <= 0){
    mojadata.darmoweplnsekundy = mojadata.sekundy;
    var darmowyhajs = 15;
    player.money += darmowyhajs;
    darmowepieniadze.ileczekac = 30;
    poID('odbierz1').innerHTML = darmowepieniadze.ileczekac + "s"; // ustawia insant kolor red
    poID('odbierz1').style = "background-color: red";
    return;}
  konsola("Musisz odczekać 30 sekund przed następnym poborem pieniędzy.");
    }

 function zgodacookie(a){
  if(a == 1){
    poKlasie('bzgoda',0).style.background = "#fcca03";
    poKlasie('czgoda',0).style.background = "lightgrey";
   odCookies.zgodanacookie = 1;
  }
  if(a == 2){
    odCookies.zgodanacookie = 0;
    Cookies.set('zgodanacookie',odCookies.zgodanacookie, { expires: 365 });
    poKlasie('czgoda',0).style.background = "#fcca03";
    poKlasie('bzgoda',0).style.background = "lightgrey";
  }

}






















//
