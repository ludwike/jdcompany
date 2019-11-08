function onLoad1(){
var wartoscnick2 = document.getElementById('nick2').value;
document.getElementById('nazwa').innerHTML = wartoscnick2;
if(wartoscnick2==""){
document.getElementById('nazwa').innerHTML = 'Your_nickname';}
}






function przekierowanie1(){
  var a = document.getElementById('nick').value;
  var b = document.getElementById('nick2').value;
if(a==0){var a = 'euw'}
if(b != ""){window.open("https://" + a + ".op.gg/summoner/userName=" + b); return;}
alert('Write your nickname clown!');
}
function przekierowanie2(){
  var a = document.getElementById('nick').value;
  var b = document.getElementById('nick2').value;
if(a==0){var a = 'euw'}
if(b != ""){window.open("https://wol.gg/stats/" + a +"/" + b +"/"); return;}
alert('Write your nickname clown!');
}
function przekierowanie3(){
  var a = document.getElementById('nick').value;
  var b = document.getElementById('nick2').value;
if(a==0){var a = 'euw'}
if(b != ""){window.open("https://www.masterypoints.com/player/" + b + "/" + a + ""); return;}
alert('Write your nickname clown!');
}
function przekierowanie4(){
  var a = document.getElementById('nick').value;
  var b = document.getElementById('nick2').value;
if(a==0){var a = 'euw'}
if(b != ""){window.open("http://www.lolskill.net/summoner/" + a + "/"+ b + ""); return;}
alert('Write your nickname clown!');
}
