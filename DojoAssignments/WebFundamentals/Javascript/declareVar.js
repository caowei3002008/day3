var number1 = 1;
console.log("The First number:", number1);
var number2 = 2;
console.log("The Second number:", number2);
var number3 = 3;
console.log("The Third number:", number3);
var number4 = 4;
console.log("The Fourth number:", number4);
var string1 = "abc";
console.log("The first string:", string1);
var string2 = "zxc";
console.log("The second string:", string2);
var string3 = "qwe";
console.log("The third string:", string3);
var flag1 = true;
console.log(flag1);
var flag2 = false;
console.log(flag2);
var abc;
console.log(abc);

function time(hour,minute,period){
	if(period == "AM" && (hour>=0&&hour<=12)&&(minute>=0 &&minuter<60)){
		if(minute >30){
			console.log("It's almost "+(hour+1) +" in the morning");
		}
		else{
			console.log("It's just after"+hour+" in the morning");
		}

	}
	else if(period == "PM" && (hour>=0&&hour<=12)&&(minute>=0 &&minuter<60)){
				if(minute >30){
			console.log("It's almost "+(hour+1) +" in the evening");
		}
		else{
			console.log("It's just after"+hour+" in the evening");
		}

	}
	else{
		console.log("Wrong input")
	}
}