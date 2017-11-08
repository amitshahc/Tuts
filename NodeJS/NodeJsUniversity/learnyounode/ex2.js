/*
//console.log(process.argv);
var argv = process.argv;
var result = 0;

for(i in argv){
	
	if(isNaN(argv[i]))
		continue;

	//console.log(argv[i]);
	result += parseInt(argv[i], 10);
}
console.log(result);
*/

var result = 0

for (var i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i])
}

console.log(result)