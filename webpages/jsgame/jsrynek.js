function rynek(){
  cenaczesczmienna = 2;
  poID('itemcena').innerHTML = cena + "$";
  poID('iloscprzedm').innerHTML = iloscp;
}
function kup(){
  if(cena == 0){
    return;
  }
  if(player.money < cena){
    konsola('Nie masz wystarczająco pieniędzy!');
    return;}
  else{
    player.money -= cena;
    iloscp += 1;
    poID('pln').innerHTML = player.money + "$";
    poID('iloscprzedm').innerHTML = iloscp;
    rynek();
  }
}
function sprzedaj(){
  if(iloscp <= 0){
    konsola('Nie masz tego przedmiotu!');
    return;}
  else{
    iloscp -= 1;
    player.money += cena;
    poID('pln').innerHTML = player.money + "$";
    poID('iloscprzedm').innerHTML = iloscp;
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
