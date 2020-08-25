let calculateVarient = (data) => {
    var a=[];
    for(var i=0;i<data.length;i++){
       var arr=data[0]; 
       var arrNext=data[1];    
       for(var j=0;j<arrNext.length;j++){
           var obj=[arr[i],arrNext[j]];
           a.push(obj);
       }
}    
    console.log(a);
}
let data = [['xl','xxl','L'],['red','blue','green']];
let result = calculateVarient(data);
