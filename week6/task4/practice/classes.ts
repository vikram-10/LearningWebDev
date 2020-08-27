class  Trial {
    names:string;
    ages:number;
    constructor(name:string,age:number) {
        this.names=name;
        this.ages=age;
    }
    nameGetter(){
        return this.names;
    }
}

class Another extends Trial {
    gender:string;
    constructor(name:string,age:number,genders:string) {
        super(name,age);
        this.gender=genders;
    }
}

class extraOne extends Another{
    height: number;
    constructor(name:string,age:number,genders:string,height:number){
        super(name,age,genders);
        this.height=height;
    }

}
var a=new extraOne('Vikram',20,'M',159);
console.log(a.names);
console.log(a.ages);
console.log(a.gender);
console.log(a.height);