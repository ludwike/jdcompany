var money = 0;
var ileczekac = 0;
var idznow = "glowny";
var idzdo = null;
setInterval("ladowaniezmiennych();",1000);
setInterval("czekaj();",1000);

// SKROTY FUNKCJI I KOMEND
function poID(id){
    return document.getElementById(id);}
function konsola(text){
    return console.log(text)}

// LADOWANIE I PODSTAWOWE FUNKCJE!!!
function czekaj(){
  // sprawdzanie kasy numer 1
  if(ileczekac > 0){
    ileczekac--;
    poID('odbierz1').innerHTML = ileczekac + "s";
    poID('odbierz1').style = "background-color: red";
    konsola("Pozostało: " + ileczekac + " sekund do darmowej kasy.");
}
  else {
    poID('odbierz1').style = "background-color: #00bf00";
    poID('odbierz1').innerHTML = "Odbierz";
    konsola("Mozesz odebrac pieniadze.");}}

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
  return 0;}
  konsola("Musisz odczekać 30 sekund przed następnym poborem pieniędzy.");
}
