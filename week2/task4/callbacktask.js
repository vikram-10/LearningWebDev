function something(a,b){
    var val1=10,val2=90;
    let op=b[a](val1,val2);
    return op;
}
let add=(c,d)=>{
  return c+d;
}
let sub=(c,d)=>{
  return c-d;
}
let mul=(c,d)=>{
    return c*d;
}
oper=[add,sub,mul];
let www=something(0,oper);
console.log(www);
let www1=something(1,oper);
console.log(www1);
let www2=something(2,oper);
console.log(www2);

