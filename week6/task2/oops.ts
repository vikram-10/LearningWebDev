//create petshop proj
//pets available-class1 (availability class)
//enquiry of pets-class2 (request class)
//method to insert pets available
//add characterstics and history of pet
//mothod to store enquiries in req class
//enquiries contain array of pets of their choice
//write method to find the status of first 5 enquiries in request class
//write a method to find count of different pets available
//write a method to map req with availability&how many req are fullfilled


class availability{
    name: String;
    age: Number;
    category: String;
    characterstics: String;
    history: String;
   constructor(name,age,category){
      this.name=name;
      this.age=age;
      this.category=category;
   }
 addInformationinClass=(history,characterstics)=>{
       this.characterstics=characterstics;
       this.history=history;
   }
};

class requests{
    choiceArray=[];
    status: String;
    constructor(reqCategory){
        this.choiceArray.push(reqCategory);
    }

}

//Function to insert new pet.
var insertPet=(name,age,category)=>{
  var p=new availability(name,age,category);
  return p;
}


//Function to add pet history and characterstics.
var addInfo=(classObj,petHistory,petCharacterstics)=>{
  classObj.addInformationInClass(petHistory,petCharacterstics);
  console.log("Added!");
}


//Function to add enquiries
var addEnquiries=(categoryRequired)=>{
  var e=new requests(categoryRequired);
  return e;
}

//Function to check first 5 status
var checkStatus=(classObj)=>{
    var result=[];
   for(let i=0;i<5;i++){
        result.push(classObj[i].status);
   }
   return result;
}


//Function to find count of pets
var petCount=(classObj)=>{
   return classObj.length;
}

