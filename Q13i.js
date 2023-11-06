var fs=require("fs");
var readerStream=fs.createReadStream("input.txt");
readerStream.setEncoding("UTF-8");
var data="";
readerStream.on("data",function(chunk){
    data+=chunk;
})
readerStream.on("end",function(){
    console.log(data);
})
readerStream.on("error",function(err){
    console.log(err.stack);
})