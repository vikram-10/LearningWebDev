var chunk=function(array,size){
    if(array.length==0){
        return 0;
    }
    else{
        var final=[];
        var s = Math.floor(array.length / size);
        for(var i=0;i<s;i++){
            final.push(array.slice(i, i + size));
        }
        return final;
    }
}

var reduce=function(values,fn,accumulator){
    for(var i=0;i<values.length;i++){
        
    }
}

var filter=function(array,condition){
    var a=[];
     for(var i=0;i<array.length;i++){
         if(array[i].condition==true){
             a.push(array[i]);
         }
     }
     return a[i];
}

var find=function(collection,condition){
     for(var i=0;i<collection.length;i++){
         if(collection[i]==condition){
             return true
         }
     }
     return false;
}

var sum=function(array){
    var summation;
    for(var i=0;i<array.length;i++){
        summation+=array[i];
    }
    return summation;
}