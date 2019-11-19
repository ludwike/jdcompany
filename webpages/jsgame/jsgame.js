//moje cookies pieniadze ma sie ladowac tutaj!
var ileczekac = 0;
var idznow = "glowny";
var idzdo = null;
var obstawienie = null;
var obstawieniekomputer = null;
var stawka = 0;
var teststawka = 0;
var wartosccookie = null;
var cena = 10;
var ilosc = 0;
var iloscp = 0;
var czy = null;
var i = null;
var cenaczesczmienna = null;
var zgodanacookie = 2;
var player = {
  id: 1,
  nick: "Ludwike",
  money: 0,}
const saper = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25],
];

setInterval("aktualizacjazmiennych();",1000);
setInterval("czekanie();",1000);
setInterval("mojeCookieszapis();",1000);
setInterval("zmianaceny();",250);

function mojeCookiespieniadze(nazwacookie,liczbatekst){
  wartosccookie=getCookie(nazwacookie);
  if (wartosccookie != "") { //jeżeli cookie nie jest puste!
      konsola('Cookie o nazwie "' + nazwacookie +'" istnieje.');
      player.money = parseInt(wartosccookie);
      konsola('Pieniądze zostały zaktualizowane.');
      return;
  } else {
      konsola('Nie istnieje cookie o nazwie: "' + nazwacookie + '".');
      player.money = liczbatekst;
      Cookies.set(nazwacookie,liczbatekst, { expires: 365 });
      return;
    }
}
function mojeCookiesdarmowepln(nazwacookie,liczbatekst){
  wartosccookie=getCookie(nazwacookie);
  if (wartosccookie != "") { //jeżeli cookie nie jest puste!
      konsola('Cookie o nazwie "' + nazwacookie +'" istnieje.');
      ileczekac = parseInt(wartosccookie);
      konsola('Pieniądze zostały zaktualizowane.');
      return;
  } else {
      konsola('Nie istnieje cookie o nazwie: "' + nazwacookie + '".');
      ileczekac = liczbatekst;
      Cookies.set(nazwacookie,liczbatekst, { expires: 365 });
      return;
    }
}
function mojeCookiesilosc(nazwacookie,liczbatekst){
  wartosccookie=getCookie(nazwacookie);
  if (wartosccookie != "") { //jeżeli cookie nie jest puste!
      konsola('Cookie o nazwie "' + nazwacookie +'" istnieje.');
      iloscp = parseInt(wartosccookie);
      konsola('Pieniądze zostały zaktualizowane.');
      return;
  } else {
      konsola('Nie istnieje cookie o nazwie: "' + nazwacookie + '".');
      iloscp = liczbatekst;
      Cookies.set(nazwacookie,liczbatekst, { expires: 365 });
      return;
    }
}
function mojeCookieszgoda(nazwacookie,liczbatekst){
  wartosccookie=getCookie(nazwacookie);
  if (wartosccookie != "") { //jeżeli cookie nie jest puste!
      konsola('Cookie o nazwie "' + nazwacookie +'" istnieje.');
      zgodanacookie = parseInt(wartosccookie);
      konsola('Pieniądze zostały zaktualizowane.');
      return;
  } else {
      konsola('Nie istnieje cookie o nazwie: "' + nazwacookie + '".');
      zgodanacookie = liczbatekst;
      Cookies.set(nazwacookie,liczbatekst, { expires: 365 });
      return;
    }
}


// SKROTY FUNKCJI I KOMEND
function poID(id){
    return document.getElementById(id);}
function konsola(text){
  return console.log(text);}
function poKlasie(klasa,numer){
  return document.getElementsByClassName(klasa)[numer];}

// LADOWANIE I PODSTAWOWE FUN KCJE!!!
function onLoadAll(){
  mojeCookieszgoda('zgodanacookie',0);
  ladowaniezmiennych();
  if(zgodanacookie != 1){return;}
  mojeCookiespieniadze('pieniadze',5);
  mojeCookiesdarmowepln('darmoweplnczekanie',0);
  mojeCookiesilosc('iloscp',0);

}

function czekanie(){
  // sprawdzanie odbioru pieniedzy numer 1
if(ileczekac > 0){
  ileczekac--;
  poID('odbierz1').innerHTML = ileczekac + "s";
  poID('odbierz1').style = "background-color: red";
//  konsola("Pozostało: " + ileczekac + " sekund do darmowej kasy.");
}
  else {
    poID('odbierz1').style = "background-color: #00bf00";
    poID('odbierz1').innerHTML = "Odbierz";
  //  konsola("Możesz odebrać pieniądze.");
  }}

function ladowaniezmiennych(){
  if(zgodanacookie != 1){
    konsola('jd');
  }
  //odbieranie kasy numer 1 + kolorki
  poID('odbierz1').innerHTML = "Odbierz";
  poID('odbierz1').style = "background-color: #00bf00";
  zgodacookie(zgodanacookie);
}
function aktualizacjazmiennych(){
  //pieniadze
  poID('pln').innerHTML = player.money + "$";
  konsola("Stan konta: " + player.money + "$");
}

function przejscie(a){
  poID(idznow).style.display = "none";
  idznow = a;
  poID(a).style.display = "block";
}

// KOLEJNE FUNKCJE
  function darmowepln(){
    if(ileczekac == 0){
      var darmowyhajs = 15;
      player.money += darmowyhajs;
      ileczekac = 30;
      poID('odbierz1').innerHTML = ileczekac + "s"; // ustawia insant kolor red
      poID('odbierz1').style = "background-color: red";
      return;}
      konsola("Musisz odczekać 30 sekund przed następnym poborem pieniędzy.");
    }


function mojeCookieszapis(){
  if(zgodanacookie != 1){return;}
  Cookies.set('pieniadze',player.money, { expires: 365 });
  Cookies.set('darmoweplnczekanie',ileczekac, { expires: 365 });
  Cookies.set('iloscp',iloscp, { expires: 365 });
  Cookies.set('zgodanacookie',zgodanacookie, { expires: 365 });
//  konsola('Cookies zostały automatycznie zapisane!');
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
} //sprawdzanie czy jest cookie

function zgodacookie(a){
  if(a == 1){
    poKlasie('bzgoda',0).style.background = "#ff4824";
    poKlasie('czgoda',0).style.background = "none";
   zgodanacookie = 1;
  }
  else{
    zgodanacookie = 0;
    Cookies.set('zgodanacookie',zgodanacookie, { expires: 365 });
    poKlasie('czgoda',0).style.background = "#ff4824";
    poKlasie('bzgoda',0).style.background = "none";
  }
}























//
