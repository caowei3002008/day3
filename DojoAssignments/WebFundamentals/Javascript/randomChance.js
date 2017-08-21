var x = Math.trunc(Math.random()*50)+51;
function randomChance(x){
	var award = 0;
	console.log("coin: "+x);
	for(var i = x; i>0; i--){
		var y = Math.trunc(Math.random()*50)+51;
		if(y == Math.trunc(Math.random()*50)+51){
			award = 90 + i;
			
			break;
		}else{
			continue;
		}
	}
	return award;
}