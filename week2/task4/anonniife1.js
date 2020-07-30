var a=[1,2,3,4,5,6,7];

var oddStuff=(a)=>{
    var b=[];
    for(var i=0;i<a.length;i++){
        if(a[i]%2==0){
            continue;
        }
        else{
            b.push(a[i]);
        }
    }
    return b;
}

console.log(oddStuff(a));