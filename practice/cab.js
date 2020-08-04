var obj={
    a:5
}
var trial=function(b,c){
    return this.a+b+c;
}
var binded=trial.bind(obj);
console.log(binded(2,3));