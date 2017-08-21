function numbersOnly(arr){
	var arr1 = [];
	for(var i = 0; i<arr.length;i++){
		if(typeof arr[i] === "number"){
			arr1.push(arr[i]);
		}
	}
	return arr1;
}