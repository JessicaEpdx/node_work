var bl = require('bl');
var http = require('http');
var stringData = undefined;
var stringData2 = undefined;
var stringData3 = undefined;




// var readable1 = http.get(process.argv[2], function(response){
//   response.setEncoding('utf8')
//   response.pipe(bl(function (err, data) {
//     if(err){
//       console.log("errors");
//       return;
//     }
//     stringData = data.toString()
//   }));
// });
//
// var readable2 = http.get(process.argv[3], function(response){
//   response.setEncoding('utf8')
//   response.pipe(bl(function (err, data) {
//     if(err){
//       console.log("errors");
//       return;
//     }
//     stringData2 = data.toString()
//     console.log(stringData2)
//
//   }));
// });
//
// var readable3 = http.get(process.argv[4], function(response){
//   response.setEncoding('utf8')
//   response.pipe(bl(function (err, data) {
//     if(err){
//       console.log("errors");
//       return;
//     }
//     stringData3 = data.toString()
//     console.log(stringData3)
//
//   }));
// });
//
// readable1.on("end", function(){
//   console.log(stringData)
// })

var counter = 3

if(counter == 3) {
  http.get(process.argv[2], function(response){
    response.setEncoding('utf8')
    response.pipe(bl(function (err, data) {
      stringData = data.toString()
      counter--
    }));
  });
}
if(counter == 2) {
  http.get(process.argv[3], function(response){
    response.setEncoding('utf8')
    response.pipe(bl(function (err, data) {
      var stringData2 = data.toString()
      counter--
    }));
  });
}

if(counter == 1) {
  http.get(process.argv[4], function(response){
    response.setEncoding('utf8')
    response.pipe(bl(function (err, data) {
      var stringData3 = data.toString()
      counter--
    }));
  });
}
if (counter == 0) {
  console.log(stringData)
  console.log(stringData2)
  console.log(stringData3)
}
