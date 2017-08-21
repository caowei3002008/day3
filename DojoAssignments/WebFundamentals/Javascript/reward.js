

function rewards(days){
	var sum = 0.01;
	var daysReward = 0.01;
	for(i = 2; i<=days;i++){
		daysReward*=2;
		sum+=daysReward;
		console.log(sum);
	}
	return sum;
}