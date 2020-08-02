function Shape(name,sides,sideLength){
    this.name=name;
    this.sides=sides;
    this.sideLength=sideLength;
    this.rand=function(){
        console.log(this.name);
    }
    this.printArea=function(){
        console.log(sides*sideLength);
    }
}

var bb=new Shape("SQ",4,30);
bb.printArea();