var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
 var a={};
var name=arr[0];
a[name]=arr[(arr.length)-1];
console.log(a);
 //return newObject;
}

transformFirstAndLast(arr);