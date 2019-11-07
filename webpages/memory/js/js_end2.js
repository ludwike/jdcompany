function plusK(id){
	if(id>8){
		switch(id){
		case 9:
		id="k1";
		break;
		case 10:
		id="k2";
		break;
		case 11:
		id="k3";
		break;
		case 12:
		id="k4";
		break;
		case 13:
		id="k5";
		break;
		case 14:
		id="k6";
		break;
		case 15:
		id="k7";
		break;
		case 16:
		id="k8";
		break;
		}
		//return "k"+id;//id=k9
	}
	return id;}

function over9(id){
	switch(id){
		case 9:
		id=1;
		break;
		case 10:
		id=2;
		break;
		case 11:
		id=3;
		break;
		case 12:
		id=4;
		break;
		case 13:
		id=5;
		break;
		case 14:
		id=6;
		break;
		case 15:
		id=7;
		break;
		case 16:
		id=8;
		break;
	}
	return id;}

function odwrocKarte(id){
	//potrzeba zmiennej pomocniczej, poniewaz
	//pierwsza funkcja over9() zmienia jej wartosc,
	//a tak niezmieniona wartosc jest potrzebna to plusK()
	let temp=id;


	//zmienna m zainicjalizowana wczesniej
	//tablica bufor zainicjalizowana wczesniej
	bufor[m] = over9(temp);
	m++;
	console.log(bufor);
	if(bufor[bufor.length-1]==bufor[bufor.length-2]){


		//zmienObrazNa('src','id');
		debugger;
		zmienObrazNa('karty/black.png',plusK(bufor[bufor.length-1]));
		debugger;
		zmienObrazNa('karty/black.png',plusK(bufor[bufor.length-2]));
		debugger;
		bufor.splice(0);
		bufor.length = 0;
		//bufor[0] = "test";

		//poID(2).removeAttribute('onclick')
		//to jest na wywalenie klikalnosci, zeby nie dalo sie kliknac
		//w czarny element
		console.log("znalazłeś dwa takie same elementy");
		//alert("Znalazłeś dwa takie same elementy! najs");

	}else{




	//zmienia obrazek na prawidlowy
	zmienObrazNa("karty/"+over9(id)+".png", plusK(temp));

	//po 1000 milisekundach obrazek zmieni sie na domyślny
	//można za 1000 wstawic poziom trudności tbh
	//normalny = 1000; łatwy 2000, trudny 500;
	setTimeout(function(){ zmienObrazNa("karty/rewers.png", plusK(temp))},1000)}
	
}




































