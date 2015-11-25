const max = process.argv[2];

let FizzBuzz = {
	[Symbol.iterator]() {
		let current = 1, message = "";

		return{
			next() {
				if(current > max ) 	return {done:true};
				message = "";
          	    message += (current % 3 === 0) ? "Fizz" : "";
                message += (current % 5 === 0) ? "Buzz" : "";
                message =  (message === "") ? current : message;
                current = current + 1;
                return {
                    done: false,
                    value: message
                }
			}
		}
	}
}

for (var n of FizzBuzz){
	console.log(n);
}