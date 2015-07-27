var fs = require('fs')
var count = undefined

function countLines(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    count = fileContents.toString().split('\n').length - 1
    callback()
  })
}
function logCount() {
  console.log(readFile)
}

countLines(logCount)
