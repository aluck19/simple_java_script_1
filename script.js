//Question 1
function question_1(){
	var number = prompt("Enter a number ");
	
	if(number > 100){
		alert("Greater than 100");
	} else if(number == 100){
       alert("Equal to 100");
	}
	else{
        alert("Less than 100");
	}	
}

//Question 2			
function question_2(){
	var input = prompt("Enter 'c' for Celsius and 'f' for Faranheit ");
	
	if(input === "c"){
		var celsius = prompt("Enter the temperature ");
		var faraheit = ((celsius/5)*9)+32;
		
		alert( "celsius = " + celsius+ " -> "+ faraheit +"F ");
	} else if(input === "f" ){
       	var faraheit = prompt("Enter the temperature ");
		var celsius = ((faraheit/32)/9)*5;
		
		alert( "faraheit = " + faraheit+ " -> "+ celsius +"C ");
	}
	else{
        alert("You entered wrong option!");
	}	
}

//Question 3
function mulitply(){
	var first = prompt("Enter first number");
	var second = prompt("Enter second number");
	var mul = first * second;
	alert( first + "X" + second + " ->"  + mul);
}

function division(){
	var first = prompt("Enter first number");
	var second = prompt("Enter second number");
	var div = first / second;
	alert( first + "/" + second + " ->"  + div);
}

//Question 4
function question_4(){
	var subject1 = prompt("marks in web technology");
	var subject2 = prompt("marks in image processing");
	var subject3 = prompt("marks in computer graphics");
	
	var pert = ( (Number(subject1)+Number(subject2)+Number(subject3))/300)  * 100;
	
	if(pert<100 && pert>=80){
			alert("DISTINCTION");
	}else if(pert < 80 && pert>=60){
		alert("FIRST DIVISION");
	}else if(pert < 60 &&  pert >=40){
		alert("SECOND DIVISION");	
	}else {
		alert("FAIL");
	}
}

//Question 5
function question_5(){
	var b = 0;
	var g = 0;
	
	do {
		var char = prompt("Enter the character");
		
		if(char === "b"){
			b++;
		}else if(char === "g"){
		
			g++
		}
	
	}while(char == "b" || char == "g");
	
	alert("Numebr of boys" + b + "   " + "Number of girls" + g);
}