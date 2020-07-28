var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllKeys(obj) {
    // your code here
    var a=[];
    for(key in obj){
        a.push(key);
    }
    console.log(a);
   }
   printAllKeys(obj);