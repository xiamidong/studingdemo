// 引入http 模块
var http = require('http');

//创建http服务器
http.createServer(function(request,response){
	response.writeHead(200,{"content-type":"json"});
	response.end('nihao');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');


