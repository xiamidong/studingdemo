// var express = require('express');
// var app = express();
// app.get('/home', function(req, res) {
//   res.send('Hello.WOrd!');
// });
// var server = app.listen(3000, function(){
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('host', host);
//   console.log('Server is runing on http://%s:%s', host, port);
// });

var http = require('http');
var url = 'http://www.baidu.com';

http.get(url, function(res){
  var html = '';
  res.on('data', function(phtml) {
    html+=phtml;
  });
  res.on('end', function(){
    console.log(html);
  });
});