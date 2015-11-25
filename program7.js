// var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
// var sum = process.argv[3] + evenOrOdd;

var obj = {
	[process.argv[2] % 2 === 0 ? "even" : "odd"] : parseInt(process.argv[2]),
	[parseInt(process.argv[3]) + parseInt(process.argv[2])] : parseInt(process.argv[3]) + parseInt(process.argv[2])
};

console.log(obj);