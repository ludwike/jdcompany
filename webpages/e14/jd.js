function przeslij(){
var a = document.getElementById("aa").value;
var b = document.getElementById("bb").value;
var c = document.getElementById("cc").value;
var d = document.getElementById("dd").value;
var e = document.getElementById("ee").checked;
if(e == false){
	document.getElementById('p').style = "color:red;";
	document.getElementById('p').innerHTML = "Musisz zapoznać się z regulaminem";
	return 0;
}
document.getElementById('p').style = "color:black;";
document.getElementById('pp').innerHTML = a + " " + b;
document.getElementById('p').innerHTML = "Treść Twojej Sprawy:" + d + "<br>Na podany e-mail zostanie wysłana oferta";


}