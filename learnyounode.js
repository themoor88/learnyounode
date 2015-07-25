// Challenge 1
// console.log("HELLO WORLD");

// Challenge 2
// var result = 0
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i]);
// };
// console.log(result);

// Challenge 3
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString().split('\n').length - 1;
console.log(str);