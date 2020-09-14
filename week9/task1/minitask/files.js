var fs=require('fs');
var http=require('http');



http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readdir("D:\Steam",withFileType,function(err,file){
        if(err){
            throw err;
        }
        else{
            console.log(file+withFileType);
        }
    });
res.write("<h1>Hello world<h1>");
res.end();
}).listen(8030);
