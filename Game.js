var counter = 94;
var num = 0;



var question1 = "Capitals of the World";
var question2 = "Sports";
var question3 = "Human body parts";
var question4 = "Chemical Elements";
var question5 = "Vegetables";
var question6 = "Modes of Transportation";
var question7 = "Fish";
var question8 = "Geometric Shapes";
var question9 = "Country";
var question10 = "Fruit";
var total = 0;





setInterval(function () {
    if (counter == 0) {
        document.getElementById("timer").innerHTML = num;
        alert("Finished! Your Score is " + total);
        window.location.assign("default.html");
    }
    else {
        counter--;
        document.getElementById("timer").innerHTML = counter;
    }
}, 1000);

function Validate() {    
	var get = document.getElementById("ans").value;
    var ans = get.toUpperCase().toLowerCase();
    if (ans === "abu dhabi") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    } else if (ans === "amsterdam") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    } else if (ans === "algiers") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    } else if (ans === "athens") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    } else if (ans === "ankara") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "basketball") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "beach volleyball") {
        alert("Correct!");
        Question3();
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "badminton") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "mouth") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "muscles") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "molars") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "moustache") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "marrow") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "actinium") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "aluminum") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "americium") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "antimony") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "argon") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "arsenic") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "astatine") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "cabbage") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "carrot") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "cauliflower") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "celery") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "cherry tomatoes") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "chick pea") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "chili pepper") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "chives") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "corn") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "cucumber") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "taxi") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "train") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "candiru") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "candlefish") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "capelin") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "carp") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "carpetshark") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "catfish") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "caverfish") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "circle") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "cone") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "cube") {
        alert("Correct!");
        Question9();
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "cylinder") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "cuboid") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "cocave") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "philippines") {
        alert("Correct!");
        Question10();
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "pakistan") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "palau") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "palestinian") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "panama") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "paraguay") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "peri") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "poland") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "portugal") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else if (ans === "orange") {
        alert("Correct!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
        document.getElementById("timer").innerHTML = 0;
        alert("Finished!, your score is " + total);
        window.location.assign("default.html");
    }
    else if (ans === "olive") {
        alert("Correct!");
        alert("Finished!");
        total += 10;
        document.getElementById("totalScore").innerHTML = total;
    }
    else {
        alert("Nope :(");
    }
    document.getElementById("ans").value = null;
}

function GetRandomQuestion(){	
	var getRandomNumber = Math.floor( 1 + Math.random() * 10);
    var question = document.getElementById("Questions").innerHTML;
    var letter = document.getElementById("Letter").innerHTML
	switch(getRandomNumber){
		case 1:
			document.getElementById("Questions").innerHTML = question1;
			document.getElementById("Letter").innerHTML = "A";
			break;
		case 2:
			document.getElementById("Questions").innerHTML = question2;
			document.getElementById("Letter").innerHTML = "B";
			break;
		case 3:
		 	document.getElementById("Questions").innerHTML = question3;
			document.getElementById("Letter").innerHTML = "M";
		 	break;
		 case 4:
		 	document.getElementById("Questions").innerHTML = question4;
			document.getElementById("Letter").innerHTML = "A";
		 	break;
		 case 5:
		 	document.getElementById("Questions").innerHTML = question5;
			document.getElementById("Letter").innerHTML = "C";
		 	break;
		 case 6:
		 	document.getElementById("Questions").innerHTML = question6;
			document.getElementById("Letter").innerHTML = "T";
		 	break;
		 case 7:
		 	document.getElementById("Questions").innerHTML = question7;
			document.getElementById("Letter").innerHTML = "C";
		 	break;
		 case 8:
		 	document.getElementById("Questions").innerHTML = question8;
			document.getElementById("Letter").innerHTML = "C";
		 	break;
		 case 9:
		 	document.getElementById("Questions").innerHTML = question9;
			document.getElementById("Letter").innerHTML = "P";
		 	break;
		 case 10:
		 	document.getElementById("Questions").innerHTML = question10;
			document.getElementById("Letter").innerHTML = "O";
		 	break;		
	
	}	

}
