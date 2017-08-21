//part I
var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]


for(var i = 0 in students){
	console.log(students[i].first_name +" "+ students[i].last_name);
}

//part II
var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }


 	console.log("Students");
 	var index = 1;
 	for(var j = 0 in users.Students){
 		var count = 0;
 		
 		count = users.Students[j].first_name.length + users.Students[j].last_name.length;
 		
 		console.log( index +"-"+users.Students[j].first_name+" "+users.Students[j].last_name+" - "+count);
 		index +=1;
 	}
 	var index1 = 1;
 	console.log("Instructors");
 	for(var k = 0 in users.Instructors){
 		var count = 0;
 		count = users.Instructors[k].first_name.length + users.Instructors[k].last_name.length;
 		console.log( index1+"-"+users.Instructors[k].first_name+" "+users.Instructors[k].last_name+" - "+count);
 		index1++;
 	}
 