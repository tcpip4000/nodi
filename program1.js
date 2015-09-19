// Program 1

//var num1Str = process.argv[2];
//var num2Str = process.argv[3];
//
//if (num1Str != "" && num2Str != "") {
//	result = Number(num1Str) + Number(num2Str);
//} else {
//	result = "";
//}
var result = 0;
for (i = 2; i < process.argv.length; i++) {
	if (process.argv[i] != "") {
		result += Number(process.argv[i]);
	}
}
console.log(result);
