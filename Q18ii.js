var fs=require("fs");
fs.unlink("example.txt",function(err){
    if(err) throw err;
    console.log("File has been deleted successfully")
})