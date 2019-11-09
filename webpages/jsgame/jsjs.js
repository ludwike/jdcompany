var money = 0;
var ileczekac = 0;
setInterval("ladowaniezmiennych();",1000);
setInterval("czekaj();",1000);

function ladowaniezmiennych(){
  //pieniadze
document.getElementById('pln').innerHTML = money + "$";
console.log("Stan konta: " + money + "$");
  //odbieranie kasy numer 1 + kolorki
document.getElementById('odbierz1').innerHTML = "Odbierz";
document.getElementById('odbierz1').style = "background-color: #00bf00";

}

function darmowepln(){
if(ileczekac == 0){
  var darmowyhajs = 10;
  money = money + darmowyhajs;
  ileczekac = 30;
  document.getElementById('odbierz1').innerHTML = ileczekac + "s"; // ustawia insant kolor red
  document.getElementById('odbierz1').style = "background-color: red";
  return 0;}
  console.log("Musisz odczekać 30 sekund przed następnym poborem pieniędzy.");
}

function czekaj(){
  // sprawdzanie kasy numer 1
  if(ileczekac > 0){
    ileczekac--;
    document.getElementById('odbierz1').innerHTML = ileczekac + "s";
    document.getElementById('odbierz1').style = "background-color: red";
    console.log("Pozostało: " + ileczekac + " sekund do darmowej kasy.");
}
  else {
    document.getElementById('odbierz1').style = "background-color: #00bf00";
    document.getElementById('odbierz1').innerHTML = "Odbierz";
    console.log("Mozesz odebrac pieniadze.");}}

function changemenukody(){
document.getElementById('glowny').style.display = "none";
document.getElementById('kody').style.display = "block";
}

function changekodymenu(){
document.getElementById('kody').style.display = "none";
document.getElementById('glowny').style.display = "block";
}
