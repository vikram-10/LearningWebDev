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
    var a=[];
    //var ins=Math.floor((Math.random()*8)+1);
    for(var i=0;a.length<9;i++){
        var ins=Math.floor((Math.random()*8)+1);
        for(var j=0;j<a.length;j++){
            if(ins==a[j]){
                break;
            }
            else{
                a.push(ins);
                document.getElementById("dummyId").innerHTML+=ins;
            }
        }
    }
});