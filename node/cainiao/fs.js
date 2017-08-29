// 引入http 模块
var http = require('http');
var fs=require('fs');

//创建http服务器
http.createServer(function(request,response){
	response.writeHead(200,{"content-type":"text/plain"});
	// 异步读取文件
	fs.readFile('fs2.txt',function(err,data){
		console.log('err',err);
		if(err){
			console.log('err',err);
			response.end(err.toString());
		} else {
		response.end(data);
		}
	});
	// 同步读取文件
	// var fsRead=fs.readFileSync('fs.txt');
	// response.end(fsRead.toString());
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');


