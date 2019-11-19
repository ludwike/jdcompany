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
var czy = null;
var i = null;
var cenaczesczmienna = null;
var player = {
  id: 1,
  nick: "Ludwike",
  money: 0,}
setInterval("aktualizacjazmiennych();",1000);
setInterval("czekanie();",1000);
setInterval("mojeCookieszapis();",1000);
setInterval("zmianaceny();",100);

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
      ilosc = parseInt(wartosccookie);
      konsola('Pieniądze zostały zaktualizowane.');
      return;
  } else {
      konsola('Nie istnieje cookie o nazwie: "' + nazwacookie + '".');
      ilosc = liczbatekst;
      Cookies.set(nazwacookie,liczbatekst, { expires: 365 });
      return;
    }
}


// SKROTY FUNKCJI I KOMEND
function poID(id){
    return document.getElementById(id);}
function konsola(text){
  return console.log(text)}

// LADOWANIE I PODSTAWOWE FUN KCJE!!!
function onLoadAll(){
  mojeCookiespieniadze('pieniadze',5);
  mojeCookiesdarmowepln('darmoweplnczekanie',0);
  mojeCookiesilosc('ilosc',0);

  ladowaniezmiennych();
}

function czekanie(){
  // sprawdzanie odbioru pieniedzy numer 1
if(ileczekac > 0){
  ileczekac--;
  poID('odbierz1').innerHTML = ileczekac + "s";
  poID('odbierz1').style = "background-color: red";
  konsola("Pozostało: " + ileczekac + " sekund do darmowej kasy.");
}
  else {
    poID('odbierz1').style = "background-color: #00bf00";
    poID('odbierz1').innerHTML = "Odbierz";
    konsola("Możesz odebrać pieniądze.");}}

function ladowaniezmiennych(){
  //odbieranie kasy numer 1 + kolorki
  poID('odbierz1').innerHTML = "Odbierz";
  poID('odbierz1').style = "background-color: #00bf00";
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
  Cookies.set('pieniadze',player.money, { expires: 365 });
  Cookies.set('darmoweplnczekanie',ileczekac, { expires: 365 });
  Cookies.set('ilosc',ilosc, { expires: 365 });
  konsola('Cookies zostały automatycznie zapisane!');
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

function rynek(){
  cenaczesczmienna = 2;
  poID('itemcena').innerHTML = cena + "$";
  poID('iloscprzedm').innerHTML = ilosc;
}
function kup(){
  if(player.money < cena){
    konsola('Nie masz wystarczająco pieniędzy!');
    return;}
  else{
    player.money -= cena;
    ilosc += 1;
    poID('pln').innerHTML = player.money + "$";
    poID('iloscprzedm').innerHTML = ilosc;
    rynek();
  }
}
function sprzedaj(){
  if(ilosc <= 0){
    konsola('Nie masz tego przedmiotu!');
    return;}
  else{
    ilosc -= 1;
    player.money += cena;
    poID('pln').innerHTML = player.money + "$";
    poID('iloscprzedm').innerHTML = ilosc;
    rynek();
  }
}
function zmianaceny(){
  czy = Math.floor(Math.random()*2+1);
if(czy == 1 && cena == 0){
  i++;
  if(i == 3){
    cena = 10;
    i = 0;
  }
  return;
}
  if(czy == 1){
    cena -= cenaczesczmienna;}
  if(czy == 2){
    cena += cenaczesczmienna;}

  poID('itemcena').innerHTML = cena + "$";

}























//
