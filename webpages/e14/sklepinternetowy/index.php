<html>
<head>
<title>Sklep papierniczy</title>
<link rel="stylesheet" href="styl.css">
<body>
<div id="baner">
	<h1>W naszym sklepie internetowym kupisz najtaniej</h1>
</div>
<div id="lewy">
	<h3>Promocja 15% obejmuje artykuły:</h3>
	<ul>
	<?php
$polaczenia_baza = mysqli_connect("localhost","ludwike_admin","jebacdisA1337#","ludwike_e14sklepinternetowy");
$wynik = mysqli_query($polaczenia_baza, "SELECT `nazwa` FROM `towary` WHERE promocja=1;");
if($wynik){
	while($rekord=$wynik->fetch_assoc()){
echo "<li>".$rekord['nazwa']."</li>";
	}
}
mysqli_close($polaczenia_baza);
	?>
	</ul>
</div>
<div id="srodek">
<h3>Cena wybranego artykułu w promocji</h3>

<form action="index.php" method="post">
	<select name="Nazwa">
		<option>Gumka dxDo mazania</option>
		<option>Cienkopis</option>
		<option>Pisaki 60 szt.</option>
		<option>Markery 4 szt.</option>
	</select>
	<button name="przycisk" value="WYBIERZ">WYBIERZ</button>
	</form>
	<?php
if (isset($_POST['przycisk'])){
$promocja = 0.85;
$zmiennataka = $_POST['Nazwa'];
$polaczenia_baza = mysqli_connect("localhost","ludwike_admin","jebacdisA1337#","ludwike_e14sklepinternetowy");
$wynik = mysqli_query($polaczenia_baza, "SELECT `cena` FROM `towary` where nazwa='$zmiennataka';");
echo $_POST['Nazwa'];
if($wynik){
	if($rekord=$wynik->fetch_assoc()){
$cena = $rekord['cena'];
$cenapo = round($cena * $promocja, 2);
echo " - ".$cenapo." złoty.";

	}
}
	mysqli_close($polaczenia_baza);}
	?>


</div>

<div id="prawy">
	<h3>Kontakt</h3>
	<p>telefon: 123123123<br><a href="mailto:bok@sklep.pl">e-mail:bok@sklep.pl</a><br>
		<img src="promocja2.png" alt="promocja">

</div>
<footer>
	<h4>Autor strony 235235235235</h4>
</footer>






</body>
</html>
