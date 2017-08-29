// var http = require('http');
//
// http.createServer(function (request,response) {
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end('hello word lvjunxia');
// }).listen(8888);
//
//
//
// // http.createServer(function (request, response) {
// //
// //     // 发送 HTTP 头部
// //     // HTTP 状态值: 200 : OK
// //     // 内容类型: text/plain
// //     response.writeHead(200, {'Content-Type': 'text/plain'});
// //
// //     // 发送响应数据 "Hello World"
// //     response.end('Hello World\n');
// // }).listen(8888);
//
// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');

console.log(1+4);
[1,2,3].forEach(i=>{
    console.log(i);
    if(i===2){
    return;}
});

// 在utf中一个汉字三个字节,在ASCII码中代表一个

// var buf=new Buffer(10);
// console.log(buf);
//
// var buf2=new Buffer([255,2,3]);
// console.log(buf2);

var buffer=new Buffer([1,2,3]);
var newBuffer=buffer.slice(0,1);
newBuffer[0]=100;
console.log(buffer);
console.log(newBuffer);

var buffer=new Buffer(15);
// string,当前写入的字符串,offset偏移量,length 长度,encoding 编码格式
buffer.write('珠峰',0,6,'utf8');
buffer.write('培训好',6,9,'utf8');
console.log(buffer.toString());

console.log([].slice.call([1,2,3],1));

var buff1=new Buffer('珠峰');
var buff2=new Buffer('培训机构');

console.log('buff1',buff1.toString());
console.log('buff2',buff2.toString());

Buffer.myConcat=function (list,totalLength) {
    console.log('list====',list);
    console.log('totalLength',totalLength);

    if(!totalLength){
        totalLength=0;
        list.forEach(function (item) {
            totalLength+=item.length;
        });
        console.log(totalLength,'===totalLength');
    }
    var newBuffer2=new Buffer(totalLength);
    var index=0;
    list.forEach(function (item) {
        item.copy(newBuffer2,index,0);
        index+=item.length;
    });
    newBuffer2.slice(0,totalLength);
    console.log('===newBuffer2',newBuffer2);
    return newBuffer2;
}

var buff=Buffer.myConcat([buff1,buff2]).toString();
console.log('end',buff);
//1.通过数字的方式来创建buffer
var buffer = new Buffer(4);
//将buffer写成固定的内容
buffer.fill(0);
console.log(buffer);
