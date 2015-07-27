var fs = require('fs');


module.exports = function getList(directory, inputType, callback) {
  var fileList = [];


  fs.readdir(directory, function(err, data) {
    if (err) {
      return callback(err);
    }

    data.forEach(function(file){
      var fileType = file.split('.')[1];
      if(fileType === inputType) {
        fileList.push(file);
      }
    });
    callback(null, fileList);

  });
}
