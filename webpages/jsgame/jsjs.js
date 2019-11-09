var money = 0;
var ileczekac = 0;
setInterval("loadmoney();",1000);
setInterval("czekaj();",1000);
function loadmoney(){
document.getElementById('pln').innerHTML = money + "$";
console.log("Stan konta: " + money);
}

function darmowepln(){
if(ileczekac == 0){
  var darmowyhajs = 5;
  money = money + darmowyhajs;
  ileczekac = 30;
  return 0;}
console.log("Musisz odczekać 30 sekund przed następnym poborem pieniędzy.");

}

function czekaj(){
if(ileczekac > 0){
  ileczekac--;
  console.log("Pozostało: " + ileczekac + "sekund do darmowej kasy.");
}
else {
  console.log("Mozesz odebrac darmowa kase");
}

}
