var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
 // your code here
 var a=[];
 var b=[];
 for(key in obj){
     a.push(key);
     a.push(obj[key]);
     b.push(a);
     a=[];
 }
 console.log(b);
}

convertListToObject(obj);