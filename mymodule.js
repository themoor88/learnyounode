var path = require('path');
var ext = process.argv[3];
var dir = process.argv[2];

module.exports = function(err, list) {
  list.forEach(function(file) {
    if (path.extname(file) === '.' + ext) {
      console.log(file);
    }
  });
}