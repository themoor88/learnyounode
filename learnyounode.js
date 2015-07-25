// Challenge 1
// console.log("HELLO WORLD");

// Challenge 2
// var result = 0
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i]);
// };
// console.log(result);

// Challenge 3
// var fs = require('fs');
// var buf = fs.readFileSync(process.argv[2]);
// var str = buf.toString().split('\n').length - 1;
// console.log(str);

// Challenge 4
// var fs = require('fs');
// function async() {
//   fs.readFile(process.argv[2], 'utf8', function(err, data) {
//     if (err) {
//       console.log("Error!");
//     } else {
//       console.log(data.split('\n').length -1);
//     }
//   });
// }
// async();

// Challenge 5
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, list) {
  list.forEach(function(file) {
    if (path.extname(file) === '.' + ext) {
      console.log(file);
    }
  });
});





