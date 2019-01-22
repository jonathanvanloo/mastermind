var colors = ["black", "yellow", "blue", "red", "green", "white"];
var randomColor = 	[colors[Math.floor(Math.random()*5)], 
					colors[Math.floor(Math.random()*5)], 
					colors[Math.floor(Math.random()*5)], 
					colors[Math.floor(Math.random()*5)]];
var currentRow = 1;
var loseCondition = 1;

var colorArr = []

console.log(randomColor);

for (i=1; i<=12; i++){

	// code voor standaard lay-out //
	var div = document.createElement("div"); 
	div.style.width = '400px';
	var side = document.createElement('div');
	side.style.border = '10px solid black';
	side.style.width = '100px';
	document.getElementById('main-container').appendChild(side);
	div.id = "row_" + i;
	side.id = 'chkRow_' + i;
	document.getElementById("main-container").appendChild(div);
	document.getElementById('row_1').style.backgroundColor = 'purple';
	document.getElementById('chkRow_1').style.backgroundColor = 'purple';

	for (p=1; p<=4; p++){
		// code voor citcel //
		var circle = document.createElement("div");
		circle.id = "circle_" + i + '_' + p;
		div.appendChild(circle);

		// Code voor de check knop//
		var checkbtn = document.createElement('div');
		checkbtn.id = 'chkbtn_' + i + '_' + p;
		checkbtn.style.width = '20px';
		checkbtn.style.height = '20px';
		checkbtn.style.borderRadius = '10px';
		checkbtn.style.margin = '16px 10px 10px 13px';
		side.appendChild(checkbtn)

		//code voor kleur onclick //
		colorArr["circle_" + i + '_' + p] = 0;
		circle.onclick = function(){
			var o = colorArr[this.id];
			this.style.backgroundColor = colors[o];
			colorArr[this.id] +=1;
			if (colorArr[this.id] > 5){
				colorArr[this.id] = 0;
			}
		}
	}
}

// code om te checkenof de kleur gelijk zijn aan de kleur code//
var btn = document.createElement("button");
document.getElementById("main-container").appendChild(btn);
btn.innerHTML = "Controleren";
btn.style.position = 'relative';
btn.style.top = "30px";
btn.style.left = '370px';
btn.style.height = "50px";
btn.style.fontSize = '28px';

btn.onclick = function(){
var guess = [];
var answer = []; // maakt een nieuwe array aan zodat het elke keer terugkomt.
document.getElementById('row_' + (currentRow+1)).style.backgroundColor = 'purple';
document.getElementById('chkRow_' + (currentRow+1)).style.backgroundColor = 'purple';	
		

	switch(currentRow){
		case 11:
		if (loseCondition >= 12){
			var lose = confirm('jammer je hebt verlooren! wil je nog een keer speelen?');
			if (lose == true){
				location.reload();
			}
		}
		for (p=1; p<=4; p++){
				answer[p-1] = randomColor[p-1]; // vult de nieuwe array met de elementen van randomColor zodat de invididuele elementen verwijderd kunnen worden en elke keer weer opnieuw terug kunnen komen. 
				//Zonder deze work-around en bij gebruik van randomColor, blijven de randomColor elementen verwijderd.
				guess[p-1] = document.getElementById('circle_'+currentRow+"_"+p).style.backgroundColor;
				if (answer[p-1] === guess[p-1]){
					answer[p-1] = "";
					guess[p-1] = "*";
					document.getElementById('chkbtn_'+currentRow+"_"+p).style.backgroundColor = "black";
				}
				if (guess[0] == '*' &&
					guess[1] == '*' &&
					guess[2] == '*' &&
					guess[3] == '*') {
						var win = confirm('je hebt gewonnen! wil je nog een keer speelen?');
						if (win == true){
							location.reload();
						}
				}

			}

			 for (o=1;o<=4; o++){
			 	var pos = answer.indexOf(guess[o-1]); 
				 if (pos != -1){
					answer[pos] = "";
					guess[o-1] = "*";
				 	document.getElementById('chkbtn_'+currentRow+"_"+o).style.backgroundColor = "white";
				 }
			  }
			loseCondition++;
			break;

		default: 
		for (p=1; p<=4; p++){
				answer[p-1] = randomColor[p-1]; // vult de nieuwe array met de elementen van randomColor zodat de invididuele elementen verwijderd kunnen worden en elke keer weer opnieuw terug kunnen komen. 
				//Zonder deze work-around en bij gebruik van randomColor, blijven de randomColor elementen verwijderd.
				guess[p-1] = document.getElementById('circle_'+currentRow+"_"+p).style.backgroundColor;
				if (answer[p-1] === guess[p-1]){
					answer[p-1] = "";
					guess[p-1] = "*";
					document.getElementById('chkbtn_'+currentRow+"_"+p).style.backgroundColor = "black";
				}
				if (guess[0] == '*' && //waarom doet hij het hier wel als if en niet als if else. Boven de if hierboven als if werkt het ook niet.
					guess[1] == '*' &&
					guess[2] == '*' &&
					guess[3] == '*') {
						var win = confirm('je hebt gewonnen! wil je nog een keer speelen??');
						if (win == true){
							location.reload();
						}
				}
			}

			 for (o=1;o<=4; o++){
			 	var pos = answer.indexOf(guess[o-1]); 
				 if (pos != -1){
					answer[pos] = "";
					guess[o-1] = "*";
				 	document.getElementById('chkbtn_'+currentRow+"_"+o).style.backgroundColor = "white";
				 }
			  }


		currentRow++;
		loseCondition++;
		console.log(randomColor);
		console.log(guess);
	}
			
}

