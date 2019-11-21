function rynek(){
  przedmioty.cenaczesczmienna = 2;
  poID('itemcena').innerHTML = przedmioty.cena + "$";
  poID('iloscprzedm').innerHTML = przedmioty.iloscp;
}
function kup(){
  if(przedmioty.cena == 0){
    return;
  }
  if(player.money < przedmioty.cena){
    konsola('Nie masz wystarczająco pieniędzy!');
    return;}
  else{
    player.money -= przedmioty.cena;
    przedmioty.iloscp += 1;
    poID('pln').innerHTML = player.money + "$";
    poID('iloscprzedm').innerHTML = przedmioty.iloscp;
    rynek();
  }
}
function sprzedaj(){
  if(przedmioty.iloscp <= 0){
    konsola('Nie masz tego przedmiotu!');
    return;}
  else{
    przedmioty.iloscp -= 1;
    player.money += przedmioty.cena;
    poID('pln').innerHTML = player.money + "$";
    poID('iloscprzedm').innerHTML = przedmioty.iloscp;
    rynek();
  }
}
function zmianaceny(){
    przedmioty.czy = Math.floor(Math.random()*2+1);
  if(przedmioty.czy == 1 && przedmioty.cena == 0){
    przedmioty.i++;
    if(przedmioty.i == 3){
      przedmioty.cena = 10;
      przedmioty.i = 0;
    }
    return;
  }
    if(przedmioty.czy == 1){
      przedmioty.cena -= przedmioty.cenaczesczmienna;}
    if(przedmioty.czy == 2){
      przedmioty.cena += przedmioty.cenaczesczmienna;}
poID('itemcena').innerHTML = przedmioty.cena + "$";
}
