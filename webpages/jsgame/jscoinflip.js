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
