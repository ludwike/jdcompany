// SKROTY FUNKCJI I KOMEND
function poID(id){
    return document.getElementById(id);}
function konsola(text){
  return console.log(text);}
function poKlasie(klasa,numer){
  return document.getElementsByClassName(klasa)[numer];}

// brakujące funkcje do pelnej biblioteki js cookie js! autorskie
function mojeCookiesCheck(nazwaCookie, bazoweCookie, nazwaObiektu, nazwaZmiennej){
odCookies.wartoscCookie=getCookie(nazwaCookie);
  if (odCookies.wartoscCookie != "") { //jeżeli cookie nie jest puste!
    eval(nazwaObiektu)[nazwaZmiennej] = parseInt(odCookies.wartoscCookie);
    return;
  }
  else{
    konsola('Nie istnieje cookie o nazwie: "' + nazwaCookie + '".');
    Cookies.set(nazwaCookie, bazoweCookie, { expires: 365 });
    return;
}}

function getCookie(cname) {//sprawdzanie czy jest cookie
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
    c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);}
      }
  return "";
}
