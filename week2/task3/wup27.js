function powersOfTwo(n){
  var prod=1;
  var res=[];
   for(var i=1;i<=n;i++){
    res.push(prod);
       prod*=2
       
   }
    return res;
  }
  var op=powersOfTwo(3);
  console.log(op);