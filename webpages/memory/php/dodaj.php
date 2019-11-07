<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/karty.css">
</head>
<body>



<?php
$db = mysqli_connect('localhost','root','a12345','memory');

$nazwa = $_POST['nazwa'];
$ilosc = $_POST['ilosc'];

// $sql = "INSERT INTO gracze VALUES (NULL, 'asd','asd')";
$input = "INSERT INTO gracze VALUES (NULL, '".$nazwa."','".$ilosc."');";

mysqli_query($db, $input);

$output = mysqli_query($db, "SELECT nick, wynik FROM gracze ORDER BY wynik ASC;");

if($output->num_rows > 0){
	echo "<table>";
	while($row = $output->fetch_assoc()){
		echo "<tr><td>".$row['nick']."</td><td>".$row['wynik']."</td></tr>";
	}
		echo "</table>";
}




// echo $_POST['nazwa'].'<br>';
// echo $_POST['ilosc'].'<br>';
// echo "Dodano cię do listy!";
echo "<br><br><br>to jest wciaz WIP";
mysqli_close($db);
?>



</body>
</html>














