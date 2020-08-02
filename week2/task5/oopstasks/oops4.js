class Bank{
    constructor(code,address){
        this.code=code;
        this.address=address;
    }
    manages(){

    }
    maintains(){

    }
}
class ATM extends Bank{
    constructor(location,managed){
        this.location=location;
        this.managed=managed;
    }
   identifies(){

   } 
   transactions(){

   }

}
class Customer extends Bank{
  constructor(name,address,cardnno,dob,pin){
      this.name=name;
      this.address=address;
      this.cardnno=cardno;
      this.dob=dob;
      this.pin=pin;
    }
    verifyPassword(){

    }
}
class Account extends Bank{
    constructor(number,balance){
        this.number=number;
        this.balance=balance;
    }
    deposit(){

    }
    withdraw(){

    }
    createTransaction(){

    }
}
class ATMTransactions{
   constructor(tid,date,type,amt,pbal){
       this.tid=tid;
       this.date=date;
       this.type=type;
       this.amt=amt;
       this.pbal=pbal;
   }
   modifies(){

   }
}
class currentAccount extends Account{
   constructor(accno,balance){
      this.accno=accno;
      this.balance=balance; 
   }  
   withdraw(){

   }
}
class savingsAccount extends Account{
    constructor(accno,balance){
        this.accno=accno;
        this.balance=balance;
    }
    
}
