//moje cookies pieniadze ma sie ladowac tutaj!
var ileczekac = 0;
var idznow = "glowny";
var idzdo = null;
var obstawienie = null;
var obstawieniekomputer = null;
var stawka = 0;
var teststawka = 0;
var player = {
  id: 1,
  nick: "Ludwike",
  money: 0,}
setInterval("aktualizacjazmiennych();",1000);
setInterval("czekanie();",1000);
setInterval("mojeCookieszapis();",1000);


// SKROTY FUNKCJI I KOMEND
function poID(id){
    return document.getElementById(id);}
function konsola(text){
    return console.log(text)}

// LADOWANIE I PODSTAWOWE FUNKCJE!!!
function onLoadAll(){
aktualizacjazmiennych();
mojeCookiesladowanie('pieniadze');
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

// COINFLIP FUNKCJE
  function obstawiam(a){
    obstawienie = a;
    konsola("Obstawiłeś: " + obstawienie + ".");
    if(a == "jx"){
      poID("jx").style = "background-color:red";
      poID("kx").style = "background-color:#e8e8e8";
      obstawienie = 0;
    }
    else { //jeżeli to KX ofc.
      poID("kx").style = "background-color:red";
      poID("jx").style = "background-color:#e8e8e8";
      obstawienie = 1;
    }
  }
  function zmianastawki(a){
    teststawka = stawka + a;
    if(teststawka > player.money){
      konsola("Nie masz wystarczająco pieniędzy, żeby obstawić: " + teststawka + "$");
      teststawka = stawka;
      zmianastawkiall()
      return;
    }
    else  {
      stawka += a;
      teststawka = stawka;
      konsola("Obstawiles: " + stawka + "$");
      poID('pstawka').innerHTML = stawka + "$";}
    }
  function zmianastawkiall(){
    stawka = player.money;
    konsola("Obstawiles wszystkie swoje pieniadze czyli: " + stawka + "$");
    poID('pstawka').innerHTML = stawka + "$";
    return;
  }
  function resetstawki(){
    stawka = 0;
    teststawka = 0;
    poID('pstawka').innerHTML = stawka + "$";
    konsola('Stawka została zresetowana!');
    }
  function zmianastawkix2(){
    teststawka = stawka * 2;
    if(teststawka > player.money){
      konsola("Nie masz wystarczająco pieniędzy, żeby obstawić: " + teststawka + "$");
      teststawka = stawka;
      return;
    }
    else  {
      stawka *= 2;
      teststawka = stawka;
      konsola("Obstawiles: " + stawka + "$");
      poID('pstawka').innerHTML = stawka + "$";}
    }
  function zmianastawkiy2(){
    teststawka = stawka / 2;
    if(teststawka > player.money){
      konsola("Nie masz wystarczająco pieniędzy, żeby obstawić: " + teststawka + "$");
      teststawka = stawka;
      return;
    }
    else  {
      stawka /= 2;
      teststawka = stawka;
      konsola("Obstawiles: " + stawka + "$");
      poID('pstawka').innerHTML = stawka + "$";}
    }
  function zmianastawkirandom(){
    stawka = (Math.floor(Math.random()*player.money+1));
    if(stawka > player.money){
      stawka -= 1;
      konsola('Nie mozesz ustawic losowej kwoty!');
      return;
    }
    poID('pstawka').innerHTML = stawka + "$";
    konsola('Ustawiles losową stawkę tzn: ' + stawka + "$");
    teststawka = 0;
  }
  function cfgraj(){
    if(obstawienie == null || stawka == 0){
      konsola('Musisz ustawić swój typ oraz stawkę!');
      return;
    }
    obstawieniekomputer = (Math.floor(Math.random()*2));
    if(obstawieniekomputer == 1){
      poID('obstawienie').innerHTML = "kx";}
    else{
      poID('obstawienie').innerHTML = "jx";}
    if(obstawieniekomputer == obstawienie){
      konsola('Wygrales!');
      poID('obstawienie').style = "color: green";
      player.money += stawka;
    }
    if(obstawieniekomputer !== obstawienie){
      konsola("Przegrales!");
      poID('obstawienie').style = "color: red";
      player.money -= stawka;
    }
    poID('pln').innerHTML = player.money + "$";
    konsola("Aktualny stan konta: " + player.money + "$");
  // zeby  na minus nie bylo
    if(stawka > player.money){
      stawka = player.money;
      poID('pstawka').innerHTML = stawka + "$";
      return;
        player.money = parseInt(Cookies.get('pieniadze'));
    }
  }


function mojeCookiesladowanie(a){
  var wartosccookie=getCookie(a);
  if (wartosccookie != "") { //jeżeli cookie nie jest puste!
      konsola('Cookie o nazwie "' + a +'" istnieje.');
      player.money = parseInt(wartosccookie);
      konsola('Pieniądze zostały zaktualizowane.');
      return;
  } else {
      konsola('Nie istnieje cookie o nazwie: "' + a + '".');
      Cookies.set(a,player.money, { expires: 365 });
      return;
    }
}
function mojeCookieszapis(){
  Cookies.set('pieniadze',player.money, { expires: 365 })
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
