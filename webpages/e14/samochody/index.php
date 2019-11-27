<html>
<head>
<meta charset="utf-8">
<title>Komis Samochodowy</title>
<link rel="stylesheet" href="auto.css">
<body>
<div id="baner">
<h1>SAMOCHODY</h1>
</div>

<div id="lewy">
<h2>Wykaz samochodów</h1>
<ul>
<?php

$polaczenia_baza = mysqli_connect("localhost","root","","komis");

$wynik = mysqli_query($polaczenia_baza, "SELECT `id`,`marka`,`model` FROM `Samochody`;");
if($wynik){
while($rekord=$wynik->fetch_assoc()){
echo "<li>".$rekord['id']." ".$rekord['marka']." ".$rekord['model']."</li>";
}
}
mysqli_close($polaczenia_baza);
?>
</ul>
<h2>Zamówienia</h2>
<ul>
<?php
$polaczenia_baza = mysqli_connect("localhost","root","","komis");
$wynik = mysqli_query($polaczenia_baza,  "SELECT `Samochody_id`,`Klient` FROM `Zamowienia`;");
if($wynik){
while($rekord=$wynik->fetch_assoc()){
echo "<li>".$rekord['Samochody_id']." ".$rekord['Klient']."</li>";
}
}
mysqli_close($polaczenia_baza);
?>
</ul>
</div>

<div id="prawy">
<h2>Pełne dane: Fiat</h2>
<?php
$polaczenia_baza = mysqli_connect("localhost","root","","komis");
$wynik = mysqli_query($polaczenia_baza,  "SELECT * FROM `Samochody` where marka='Fiat';");
if($wynik){
while($rekord=$wynik->fetch_assoc()){
echo "<p>".$rekord['id']."/".$rekord['marka']."/".$rekord['model']."/".$rekord['rocznik']."/".$rekord['kolor']."/".$rekord['stan']."</p>";
}
}
mysqli_close($polaczenia_baza);
?>
</div>

<section>
<table>
<tr>
  <th><a href="kwerendy.txt">Kwerendy</a></th>
  <th>Autor: 2394238642389</th>
  <th><img src="autoo.png" alt="komis samochodowy"></th>
</tr>
</table>
</section>





</body>
</html>
