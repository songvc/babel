const max = process.argv[2];
let fizzbuzz = function* (){
	let current = 1, message = "";
	while(max >= current){
		message = "";
  	    message += (current % 3 === 0) ? "Fizz" : "";
        message += (current % 5 === 0) ? "Buzz" : "";
        message =  (message === "") ? current : message;
	    current++;		
	    yield message;
	}
}

for(var n of fizzbuzz()){
	console.log(n);
}