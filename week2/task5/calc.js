class Calculator{

    constructor(a,b){
       this.a=a;
       this.b=b;
    }
  add(){
      return a+b
  }
  sub(a,b){
     return a-b;
  }
  div(a,b){
      return a/b;
  }
  mult(a,b){
      return a*b;
  }

}
var a=5;
var b=6;
var calc=new Calculator(a,b);
var ip="mult";   //example inputs
switch(ip){
    case "add": let op=calc.add();
                console.log(op);
                break;
    case "sub": let op1=calc.sub();
                console.log(op1);
                break;     
    case "div": let op2=calc.div(a,b);
                console.log(op2);
                break;
    case "mult":let op3=calc.mult(a,b);
                console.log(op3);
                break;                               
}