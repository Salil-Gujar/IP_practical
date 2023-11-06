var http=require("http");
var url=require("url");
var fs=require("fs");
http.createServer(function(request,response){
    var pathname=url.parse(request.url).pathname;
    console.log("Request received for :"+pathname);
    fs.readFile(pathname.substring(1),function(err,data){
        if(err){
            console.log(err);
            response.writeHead(404,{"Content-Type":"text/html"});
        }
        else{
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(data.toString());
        }
        response.end();
    })
}).listen(8081);
console.log("Server is running at http://127.0.0.1:8081/");

