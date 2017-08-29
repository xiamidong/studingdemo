  // 引入event对象
  var events=require('events');
  //  实例化eventEmitter 对象
  var eventemitter=new events.EventEmitter();

  // 创建监听connecting函数
  let handleConnect=function(){
  	console.log('连接成功');
  	// 触发data-receive事件
  	eventemitter.emit('data-receive',123);
  }
  // 注册connecting事件
  eventemitter.on('connecting',handleConnect);
  //注册获取数据成功事件
  eventemitter.on('data-receive',function(data){
    setTimeout(function(){
  	 console.log('data',data);
    },1000);
  });

  // 触发connecting事件
  eventemitter.emit('connecting');
  console.log('结束');


