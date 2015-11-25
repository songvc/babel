var inputs = process.argv.slice(2);
var result = inputs.map((element)=>{return element[0]}).reduce((pre,cur)=>{return pre+cur})
console.log(result);