var fs = require('fs');
var fileList = [];
var inputType = process.argv[3]

function getList(callback) {
  fs.readdir(process.argv[2], function(err, list) {
    var files = list
    files.forEach(function(file){
      var fileType = file.split('.')[1];
      if(fileType === inputType) {
        fileList.push(file);
      }
    });
    callback()
  });
}

function logList() {
  fileList.forEach(function(file){
    console.log(file);
  })
  }

getList(logList);
