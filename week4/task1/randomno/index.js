var h1=document.createElement('h1');
h1.setAttribute('class','header');
h1.innerText="RANDOM NUMBER GENERATOR";


var clickMe=document.createElement('button');
clickMe.setAttribute('class','btn btn-primary');
clickMe.setAttribute('id','clickMe');
clickMe.innerText="CLICK ME!";

var genNumber=document.createElement('div');
genNumber.setAttribute('class','numberArea');
genNumber.setAttribute('id','dummyID');


document.body.append(h1);
document.body.append(clickMe);



clickMe.addEventListener("click",function(){
    document.body.append(genNumber);
    document.getElementById("dummyID").innerText="";
    var a=[];
    var flag=0;
    a[0]=Math.floor(Math.random()*8)+1
    for(var i=0;a.length<8;i++){
        var ip=Math.floor(Math.random()*8)+1;
        for(var j=0;j<a.length;j++){
            if(a[j]==ip){
                flag=1;
            }
        }
        if(flag==0){
            a.push(ip);
        }
        else{
            flag=0;
            continue;
        }
        flag=0;
    }
for(var k=0;k<a.length;k++){
    document.getElementById("dummyID").innerText+=a[k];
}
});