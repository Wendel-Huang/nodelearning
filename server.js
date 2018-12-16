// const http = require('http');
// var fs = require('fs');

// const hostname = '0.0.0.0';
// const port = 25930;

// const server = http.createServer(function(req, res) {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   fs.readFile('./newresearch.html','utf-8',function(err,data){
// 	if(err){
// 		throw err ;
// 	}
// 	res.end(data);
// 	});
// });

// server.listen(port, hostname, function() {
//   console.log('Server running at http://${hostname}:${port}/');
// });

var http = require('http');
var fs = require('fs');
var url = require('url');
// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   
   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{             
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});    
         
         // 响应文件内容
         response.write(data.toString());        
      }
      //  发送响应数据
      response.end();
   });   
}).listen(25930);
 
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');