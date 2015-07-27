var fs = require('fs');
var mymodule = require('./filetype.js')

mymodule(process.argv[2], process.argv[3], function(err, data) {
  if(err){
    console.log("errors");
    return err;
  }
  data.forEach(function(file){
    console.log(file);
  });
});
