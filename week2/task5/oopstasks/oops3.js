class Tv{
    constructor(brand,price,inches,onOff,channel=1,volume=50){
        this.brand=brand;
        this.price=price;
        this.inches=inches;
        this.onOff=onOff;
        this.channel=channel;
        this.volume=volume;
    }
    changeVol(){
        while((this.volume)>0&&(this.volume)<100){
            this.volume+=5;
            return this.volume;
        }
    }
    setChannel(number){
        if(number<=50){
            this.channel=number;
            return this.channel;
        }
        else{
            return this.channel;
        }
    }
    resetTv(){
        this.channel=1;
        this.volume=50;
        return this.channel+" "+this.volume;
    }
    tvStatus(){
        return this.brand+" at"+" channel "+this.channel+", volume "+this.volume;
    }
}

class subTv extends Tv{
    constructor(screenThickness,energyUsage,lifespan,refreshRate,viewingAngle,backlight,displayDetails){
        this.screenThickness=screenThickness;
        this.energyUsage=energyUsage;
        this.lifespan=lifespan;
        this.refreshRate=refreshRate;
        this.viewingAngle=viewingAngle;
        this.backlight=backlight;
        this.displayDetails=displayDetails;
    }
    displayDetails(){
       return this.brand;
    }
}
var aaa=new Tv("Heroku",1000,5,"on",50,50);  //inputs being given as params
var subaaa=new subTv(15,1000,13,150,120,"contrast","highrgb");
var op=subaaa.displayDetails();                       //calling function from inside the class
console.log(op);                             //output the return statement



//doubt:how to be able to run the final displayDetails function.