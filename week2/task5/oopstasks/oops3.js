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
var aaa=new Tv("Heroku",1000,5,"on",50,50); //inputs being given as params
var op=aaa.tvStatus();                      //calling function from inside the class
console.log(op);                            //output the return statement