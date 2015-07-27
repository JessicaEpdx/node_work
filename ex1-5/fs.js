var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var string = buffer.toString();
var splitString = string.split('\n');
console.log(splitString.length - 1)
