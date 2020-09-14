var fs=require('fs');
var http=require('http');
const { threadId } = require('worker_threads');


http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readdir(`C:\\Users\\Vikram\\Desktop\\Zen\\week9\\task1`,
{
    withFileTypes: true
}
,function(err,data){
        if(err){
            throw err;
        }
        else{
            data.forEach(element => {
                let filename=(element.name);
                if(filename.includes(".txt")){
                    console.log(filename);
                }
            });
        }  
});
    res.end();
}).listen(8040);

