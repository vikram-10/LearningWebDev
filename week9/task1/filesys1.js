var fs=require('fs');
var http=require('http');





http.createServer(function(req,res){
var date = new Date();
var timestamp = date.getTime();
var dateToday = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
var timeToday = date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.writeFile(`${dateToday}${timeToday}.txt`,timestamp,function(err){
        if(err) throw err;
        console.log("Printed");
    });
    res.end();
}).listen(8030);