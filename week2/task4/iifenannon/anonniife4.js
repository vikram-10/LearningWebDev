var a=[4,5,6,7,11];
var b=[];
function isPrime(num){
    for(var i=2;i<num;i++){
        if(num%i===0){
            continue;
        }
        else{
            console.log(num);
        }
    }
}
for(var j=0;j<a.length;j++){
    isPrime(a[j]);
}