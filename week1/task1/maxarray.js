var myArray=[3,5,7,9,10];
var max=myArray[0];
for(var i=0;i<myArray.length;i++){
    if(myArray[i]>max){
        max=myArray[i]
    }
}
console.log(max);
