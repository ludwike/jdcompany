let bufor = [];
let karta = [];
let m = 0;
let czasDoZnikniecia = 0;
let d = 0;

/*let img = document.createElement('img');
img.src = "karty/gotowe/tlo.png";
poID('main').appendChild(img);
document.getElementsByTagName('img')[0].setAttribute('id','1');
*/

//inicjalizujemy te 16 elementow z odpowiendnimi id, height i width
/*for(let i=1;i<17;i++){
	let img = document.createElement('img');
	img.src = "karty/gotowe/tlo.png";
	poID('main').appendChild(img);
	document.getElementsByTagName('img')[i-1].setAttribute('id',i);
	document.getElementsByTagName('img')[i-1].setAttribute('width',100);
	document.getElementsByTagName('img')[i-1].setAttribute('height',150);
}*/

function dodajObrazek(int){
	let img = document.createElement('img');
	img.src = "karty/gotowe/tlo.png";
	poID('main').appendChild(img);
	document.getElementsByTagName('img')[d].setAttribute('id',int);
	document.getElementsByTagName('img')[d].setAttribute('width',100);
	document.getElementsByTagName('img')[d].setAttribute('height',150);
	d++;
}

if(typeof(powtorzenia)=="undefined"){
	//jezeli tablica nie istnieje to ja tworzymy
	powtorzenia = [];
	for(let i = 0; i<16; i++){
		//wypelniamy tablice 16-oma elementami false
		powtorzenia[i] = i+1;
	}
}


//https://stackoverflow.com/questions/15585216/how-to-randomly-generate-numbers-without-repetition-in-javascript?noredirect=1&lq=1
function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


//losujemy zawartosc w tablicy
shuffle(powtorzenia);


//dodajemy elementy
for(let i = 0;i<16;i++){
	dodajObrazek(powtorzenia[i]);
}


// var random = shuffle(numbers);


//LosowanieBezPowtórzen
//losuje od 1 do podanej wartosci
/*function LBP(int){
	if(typeof(powtorzenia)=="undefined"){
		//jezeli tablica nie istnieje to ja tworzymy
		powtorzenia = [];
		for(let i = 0; i<16; i++){
			//wypelniamy tablice 16-oma elementami false
			powtorzenia[i] = false;
		}
	}
	let temp = losuj(1,16);
	for(let i = 0; i<powtorzenia.length; i++){
		if(powtorzenia[i]==temp)
	}

	return powtorzenia;
}*/

/*img.appendChild();*/



/*
1 = 9
2 = 10
3 = 11
4 = 12
5 = 13
6 = 14
7 = 15
8 = 16
*/

/*


TODO: 

1. trzeba zobaczyc czy trafia sie takie same dwa elementy

	!!!!!!!!zamienic je na "zrobione" elementy i zabrac mozliwosc klikania ich
		oznaczyc czy dany element jest juz gotowy i dopiero wtedy zabrac mu klikalnosc
		potem sprawdzac czy ten element jest gotowy

	nie moze to byc ten sam element html
2. ilosc klikniec(dlugosc tablicy bufor(potem moze nawet na minute xD))
3. limit czasowy gry/podliczanie czasu gry
4. leaderboard
	czyli trzeba pytac o nazwe gracza
		ew. zapisy do bazy danych


*/

	//przyjmuje liczbe
	//jezeli liczba > 9 zwraca liczbe z tablicy wyzej
function over9(int){
	switch(int){
		case 9: 
		return 1;
		break;
		case 10: 
		return 2;
		break;
		case 11: 
		return 3;
		break;
		case 12: 
		return 4;
		break;
		case 13: 
		return 5;
		break;
		case 14: 
		return 6;
		break;
		case 15: 
		return 7;
		break;
		case 16: 
		return 8;
		break;
	}
	return int;}

//Raz przydzielamy do kazdego obrazka eventListener, ktory wywoluje 
//funkcjie odwracamKarte(i);, gdzie i to jego id
for(let i=1; i<17; i++){
	poID(i).addEventListener('click',function() {odwracamKarte(i);},false);
	karta[i] = true;
}
/*
karta[] to taka pomocnicza tablica, ktora ma wartosci
true/false, w odpowieniej kolejnosci jak obrazki ulozone
w htmlu
true = posiada eventListener
false = nie posiada

inaczej

true = jeszcze niepoznane/niesparowane z drugim obrazkiem
false = juz ulozone, nieklikalne

*/


//checkFalse przyjmuje wartosc bool
//jezeli dostanie false zwroci true
//jezeli dostanie true zwroci false
function checkFalse(bool){
	if(bool!=true){
		return true;
	}
	else return false;
}



function wygrana(){

}

setInterval(function() {
// to pomaga w błedzie kiedy klikniemy dwa elementy, kiedy
//jeszcze jeden nie sniknal, to ten zostaje
//z tym nie zostanie
	for(let i=1; i<17; i++){
		if(karta[bufor[bufor.length-i]] == true){
			zmienObrazNa("karty/gotowe/tlo.png",bufor[bufor.length-i]);
		}
	}


	for(let i=1; i<17; i++){
		if(karta[bufor[bufor.length-i]] == false){
			zmienObrazNa("karty/gotowe/"+over9(bufor[bufor.length-i])+".png",bufor[bufor.length-i]);
		}
	}



	
},1500);



function odwracamKarte(id){
/*// to pomaga w błedzie kiedy klikniemy dwa elementy, kiedy
//jeszcze jeden nie sniknal, to ten zostaje
//z tym nie zostanie
	for(let i=1; i<17; i++){
		if(karta[bufor[bufor.length-i]] == true){
			zmienObrazNa("karty/gotowe/tlo.png",bufor[bufor.length-i]);
		}
	}


	for(let i=1; i<17; i++){
		if(karta[bufor[bufor.length-i]] == false){
			zmienObrazNa("karty/gotowe/"+over9(bufor[bufor.length-i])+".png",bufor[bufor.length-i]);
		}
	}
	*/
	//clearTimeout(czasDoZnikniecia);
	//poID("body").style.backgroundColor = 'grey';
	//alert(id);
	bufor[bufor.length] = id;
	console.log(bufor);
	//if(dwie takie same liczby && rozne id)
	if((over9(bufor[bufor.length-1])==over9(bufor[bufor.length-2])) && (bufor[bufor.length-1]!=bufor[bufor.length-2])){
		//ten kod wykonuje sie kiedy trafisz dwa takie same elementy


		//zmieniamy ostatnie dwie kliknięte karty na odpowiadające im grafiki
		//zmienObrazNa(src,id)
		zmienObrazNa("karty/gotowe/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		//zmienObrazNa("karty/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		zmienObrazNa("karty/gotowe/"+over9(bufor[bufor.length-2])+".png",bufor[bufor.length-2]);
		//zmienObrazNa("karty/"+over9(bufor[bufor.length-2])+".png",bufor[bufor.length-2]);


/*		
		poID(bufor[bufor.length-1]).removeEventListener('click',function() {odwracamKarte(i);},false);
		poID(bufor[bufor.length-2]).removeEventListener('click',function() {odwracamKarte(i);},false);
		Zamiast tego ludzie pisza zeby sklonowac obiekt(node) i dac go w to samo miejsce,
		bo jego kopiowanie nie przekopiuje jego eventlistenerow
		https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element	
*/
		
		//zabieramy mozliwosc klikania w nie poprzez kopiowanie tych elementow a potem 
		//zamiane - w ten sposob pozbywamy sie eventListenerow
		let old_element = poID(bufor[bufor.length-1]);
		let new_element = old_element.cloneNode(true);
		old_element.parentNode.replaceChild(new_element, old_element);
		//debugger;
		karta[bufor[bufor.length-1]] = false;
		//tutaj druga karta
		old_element = poID(bufor[bufor.length-2]);
		new_element = old_element.cloneNode(true);
		old_element.parentNode.replaceChild(new_element, old_element);
		//debugger;
		karta[bufor[bufor.length-2]] = false;




		setTimeout(function () {
			//sprawdzamy czy wygrales
			if(karta.every(checkFalse)){
			alert('Wygrales!');
			//debugger;
			let zwyciezca = prompt('Jak sie nazywasz? Twój wynik zostanie zapisany.');
			//debugger;
			poID('a').value = zwyciezca;
			poID('b').value = bufor.length;
			alert('Dziekujemy '+zwyciezca.pierwszaDuza()+' za zagranie! ;)\nUkończyłeś grę w '+bufor.length+' kliknięć!');
			poID('form').submit();
			}
		},250);



		//alert("eluwina\n"+"Kliknałęś "+bufor.length+" razy.");
		//alert("Kliknałęś "+bufor.length+" razy.");
	} else {















		//debugger;
		clearTimeout(czasDoZnikniecia);
		zmienObrazNa("karty/gotowe/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		//zmienObrazNa("karty/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		//czasDoZnikniecia = setTimeout(function(){ zmienObrazNa("karty/rewers.png",bufor[bufor.length-1])},250)
		czasDoZnikniecia = setTimeout(function(){ zmienObrazNa("karty/gotowe/tlo.png",bufor[bufor.length-1])},1000)


	}


}

/*
dac tykajacy licznik ktory sprawdza czy kto ma na sobie eventlistenera i jezeli ma - 
 - zamienic jego obrazek na rewers
*/



/*
function odwrocKarte(id){
	//debugger;

	//tworzy nowy element w tablicy o wartosci id
	bufor[bufor.length] = id;
	console.log(bufor);
	//if(dwie takie same liczby && rozne id)
	if((over9(bufor[bufor.length-1])==over9(bufor[bufor.length-2])) && (bufor[bufor.length-1]!=bufor[bufor.length-2])){
		//ten kod wykonuje sie kiedy trafisz dwa takie same elementy
		//zmienObrazNa(src,id)
		zmienObrazNa("karty/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		zmienObrazNa("karty/"+over9(bufor[bufor.length-2])+".png",bufor[bufor.length-2]);
		//alert("eluwina\n"+"Kliknałęś "+bufor.length+" razy.");
		//alert("Kliknałęś "+bufor.length+" razy.");
	} else {
		zmienObrazNa("karty/"+over9(bufor[bufor.length-1])+".png",bufor[bufor.length-1]);
		setTimeout(function(){ zmienObrazNa("karty/rewers.png",bufor[bufor.length-1])},1000)



	}
}
*/
/*
interwal

*/
























