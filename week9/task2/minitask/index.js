const express=require('express');
const app=express();

var student=[];

app.get("/student/:name/:teachers",function(req,res){
  res.send("You are on Get route");
});

app.post("/student/:name",function(req,res){
    var name=req.params.name;
    //var teachers=req.params.teachers;
    var obj={
        "id" : (student.length)-1,
        "Name": name,
        //"teacher": teachers
    }
    student.push(obj);
    res.send(student);
});


app.listen(3000,function(){
 console.log("Server is running...")
});