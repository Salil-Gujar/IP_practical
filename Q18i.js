var fs=require("fs");
fs.writeFile("example.txt","Sample data to be written",function(err){
    if (err) throw err;
    console.log("A file was created and data was written into it successfully !");
})
fs.readFile("example.txt","utf-8",function(err,data){
    if(err) throw err;
    console.log("Data from the file: ",data);
})
fs.appendFile("example.txt","\nThis text was appended.",function(err){
    if(err) throw err;
    console.log("Text has been appended.")
})