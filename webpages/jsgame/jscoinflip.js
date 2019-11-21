// COINFLIP FUNKCJE
  function obstawiam(a){
    coinflipvar.obstawienie = a;
    konsola("Obstawiłeś: " + coinflipvar.obstawienie + ".");
    if(a == "jx"){
      poID("jx").style = "background-color:red";
      poID("kx").style = "background-color:#e8e8e8";
      coinflipvar.obstawienie = 0;
    }
    else { //jeżeli to KX ofc.
      poID("kx").style = "background-color:red";
      poID("jx").style = "background-color:#e8e8e8";
      coinflipvar.obstawienie = 1;
    }
  }
  function zmianastawki(a){
    coinflipvar.teststawka = coinflipvar.stawka + a;
    if(coinflipvar.teststawka > player.money){
      konsola("Nie masz wystarczająco pieniędzy, żeby obstawić: " + coinflipvar.teststawka + "$");
      coinflipvar.teststawka = coinflipvar.stawka;
      zmianastawkiall()
      return;
    }
    else  {
      coinflipvar.stawka += a;
      coinflipvar.teststawka = coinflipvar.stawka;
      konsola("Obstawiles: " + coinflipvar.stawka + "$");
      poID('pstawka').innerHTML = coinflipvar.stawka + "$";}
    }
  function zmianastawkiall(){
    coinflipvar.stawka = player.money;
    konsola("Obstawiles wszystkie swoje pieniadze czyli: " + coinflipvar.stawka + "$");
    poID('pstawka').innerHTML = coinflipvar.stawka + "$";
    return;
  }
  function resetstawki(){
    coinflipvar.stawka = 0;
    coinflipvar.teststawka = 0;
    poID('pstawka').innerHTML = coinflipvar.stawka + "$";
    konsola('Stawka została zresetowana!');
    }
  function zmianastawkix2(){
    coinflipvar.teststawka = coinflipvar.stawka * 2;
    if(coinflipvar.teststawka > player.money){
      konsola("Nie masz wystarczająco pieniędzy, żeby obstawić: " + coinflipvar.teststawka + "$");
      coinflipvar.teststawka = coinflipvar.stawka;
      return;
    }
    else  {
      coinflipvar.stawka *= 2;
      coinflipvar.teststawka = coinflipvar.stawka;
      konsola("Obstawiles: " + coinflipvar.stawka + "$");
      poID('pstawka').innerHTML = coinflipvar.stawka + "$";}
    }
  function zmianastawkiy2(){
    coinflipvar.teststawka = coinflipvar.stawka / 2;
    if(coinflipvar.teststawka > coinflipvar.player.money){
      konsola("Nie masz wystarczająco pieniędzy, żeby obstawić: " + coinflipvar.teststawka + "$");
      coinflipvar.teststawka = coinflipvar.stawka;
      return;
    }
    else  {
      coinflipvar.stawka /= 2;
      coinflipvar.teststawka = coinflipvar.stawka;
      konsola("Obstawiles: " + coinflipvar.stawka + "$");
      poID('pstawka').innerHTML = coinflipvar.stawka + "$";}
    }
  function zmianastawkirandom(){
    coinflipvar.stawka = (Math.floor(Math.random()*player.money+1));
    if(coinflipvar.stawka > player.money){
      coinflipvar.stawka -= 1;
      konsola('Nie mozesz ustawic losowej kwoty!');
      return;
    }
    poID('pstawka').innerHTML = coinflipvar.stawka + "$";
    konsola('Ustawiles losową stawkę tzn: ' + coinflipvar.stawka + "$");
    coinflipvar.teststawka = 0;
  }
  function cfgraj(){
    if(coinflipvar.obstawienie == null || coinflipvar.stawka == 0){
      konsola('Musisz ustawić swój typ oraz stawkę!');
      return;
    }
    coinflipvar.obstawieniekomputer = (Math.floor(Math.random()*2));
    if(coinflipvar.obstawieniekomputer == 1){
      poID('obstawienie').innerHTML = "kx";}
    else{
      poID('obstawienie').innerHTML = "jx";}
    if(coinflipvar.obstawieniekomputer == coinflipvar.obstawienie){
      konsola('Wygrales!');
      poID('obstawienie').style = "color: green";
      player.money += coinflipvar.stawka;
    }
    if(coinflipvar.obstawieniekomputer !== coinflipvar.obstawienie){
      konsola("Przegrales!");
      poID('obstawienie').style = "color: red";
      player.money -= coinflipvar.stawka;
    }
    poID('pln').innerHTML = player.money + "$";
    konsola("Aktualny stan konta: " + player.money + "$");
  // zeby  na minus nie bylo
    if(coinflipvar.stawka > player.money){
      coinflipvar.stawka = player.money;
      poID('pstawka').innerHTML = coinflipvar.stawka + "$";
      return;
        player.money = parseInt(Cookies.get('pieniadze'));
    }
  }
