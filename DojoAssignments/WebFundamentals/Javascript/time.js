



function birthdayCounting(days){
	for(var i = days; i>=0;i--){
		if(i>=30){
			console.log(i+" days until my birthday. Such a long time... :(");
		}
		else if(i>5 && i<30){
			console.log(i+" days until my birthday. Sounds excited!");

		}
		else if(i>0 &&i<=5){
			console.log(i+"  DAYS UNTIL MY BIRTHDAY!!!");

		}else{
			console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
			console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
			console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
		}
	}
}