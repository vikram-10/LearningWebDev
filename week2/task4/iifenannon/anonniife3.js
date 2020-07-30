var a=[2,3,4,5,6];

((a)=>{
    var sum=0;
   for(var i=0;i<a.length;i++){
      sum+=a[i];
   }
   console.log(sum);
}
)(a);