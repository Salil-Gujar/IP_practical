var express=require("express");
var app=express();
app.get("/",function(req,res){
    console.log("Got a GET request for the homepage");
    res.send("Welcome to TEIT !");
})
app.put("/",function(req,res){
    console.log("Got a PUT request for the homepage");
    res.send("I am Impossible !");
})
var server= app.listen(8000,"127.0.0.1",function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Example app listening at %s:%s",host,port);
})