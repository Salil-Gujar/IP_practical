var fs=require("fs");
var writerStream=fs.createWriteStream("output.txt");
var data="This is a part of sample text in the output";
writerStream.write(data,"utf-8");
writerStream.end();
writerStream.on("finish",function(){
    console.log("Writing finished ! ");
})
writerStream.on("error",function(err){
    console.log(err.stack);
})
console.log("Program ended.");