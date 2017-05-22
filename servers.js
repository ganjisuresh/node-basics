var http= require("http");
/*http.createServer(function (request,responce){

responce.writeHead(200, {'Content-Type': 'text/plain'});
responce.end("hello world suresh")
}).listen(8089)*/

var server=http.createServer(function (request,responce){

responce.writeHead(200, {'Content-Type': 'text/plain'});
responce.end("hello world suresh")
});
server.listen(8089,function(){
	console.log("server is listening at 8089")
}) //server is listening at 8089
