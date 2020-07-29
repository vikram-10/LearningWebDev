var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(var i=0;i<arr.length;i++){
     var arr2=arr[i];
     for(j=0;j<arr2.length;j++){
          if(j==0){
              var name=arr2[j];
          }
          else{
              newObject[name]=arr2[j];
          }
     }
 }
console.log(newObject);
}

fromListToObject(arr);