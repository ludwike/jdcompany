var money = 0;
var ileczekac = 0;
var idznow = "glowny";
var idzdo = null;
var obstawienie = null;
var obstawieniekomputer = null;
var stawka = 0;
var teststawka = 0;

setInterval("console.clear()",4999);
setInterval("ladowaniezmiennych();",1000);
setInterval("czekaj();",1000);

// SKROTY FUNKCJI I KOMEND
function poID(id){
    return document.getElementById(id);}
function konsola(text){
    return console.log(text)}

// LADOWANIE I PODSTAWOWE FUNKCJE!!!
function czekaj(){
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
  //pieniadze
  poID('pln').innerHTML = money + "$";
  konsola("Stan konta: " + money + "$");
  //odbieranie kasy numer 1 + kolorki
  poID('odbierz1').innerHTML = "Odbierz";
  poID('odbierz1').style = "background-color: #00bf00";
}

function przejscie(a){
  poID(idznow).style.display = "none";
  idznow = a;
  poID(a).style.display = "block";
}

// KOLEJNE FUNKCJE
function darmowepln(){
if(ileczekac == 0){
  var darmowyhajs = 10;
  money = money + darmowyhajs;
  ileczekac = 30;
  poID('odbierz1').innerHTML = ileczekac + "s"; // ustawia insant kolor red
  poID('odbierz1').style = "background-color: red";
  return;}
  konsola("Musisz odczekać 30 sekund przed następnym poborem pieniędzy.");
}

// COINFLIP FUNKCJE
//
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
if(teststawka > money){
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
  stawka = money;
  konsola("Obstawiles wszystkie swoje pieniadze czyli: " + stawka + "$");
  poID('pstawka').innerHTML = stawka + "$";
}
function resetstawki(){
  stawka = 0;
  teststawka = 0;
  poID('pstawka').innerHTML = stawka + "$";
  konsola('Stawka została zresetowana!');
}

function zmianastawkix2(){
  teststawka = stawka * 2;
  if(teststawka > money){
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
  if(teststawka > money){
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
stawka = (Math.floor(Math.random()*money+1));
if(stawka > money){
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
if(obstawieniekomputer == 1){
  poID('obstawienie').innerHTML = "kx";}
else{
  poID('obstawienie').innerHTML = "jx";}

obstawieniekomputer = (Math.floor(Math.random()*2));
if(obstawieniekomputer == obstawienie){
  konsola('Wygrales!');
  poID('obstawienie').style = "color: green";
  money += stawka;
}
if(obstawieniekomputer !== obstawienie){
  konsola("Przegrales!");
  poID('obstawienie').style = "color: red";
  money -= stawka;
}
poID('pln').innerHTML = money + "$";
konsola("Aktualny stan konta: " + money + "$");
// zeby kuraw na minus nie bylo
if(stawka > money){
  stawka = money;
  poID('pstawka').innerHTML = stawka + "$";
  return;
}
}
