  // 引入event对象
// events 模块只提供了一个对象:events.EventeMitter 
// EventEmitter 的核心就是事件触发与事件监听器功能的封装

// 引入events 模块
var EventEmitter=require('events').EventEmitter;
//  创建eventsEmitter 对象
var eventEmitter=new EventEmitter();

eventEmitter.addListener('some_event',function(args,a){
	console.log('some_even 事件监听器个数',EventEmitter.listenerCount(eventEmitter,'some_event'));
	eventEmitter.removeAllListeners('some_event');
});

eventEmitter.on('some_event',function(){
	console.log('some_event 事件触发2');
});

setInterval(function(){
	eventEmitter.emit('some_event',123,456);
},1000);

console.log('结束');

