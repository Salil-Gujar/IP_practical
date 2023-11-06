let p=new Promise(function(resolve,reject){
    let workDone=true;
    if(workDone){
        resolve("Work has been completed successfully !");
    }else{
        reject("ERROR: work could not be completed .");
    }
})
p.then(function(result){
    console.log(result);
})
p.catch(function(err){
    console.error(err);
})