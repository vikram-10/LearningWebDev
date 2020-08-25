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
var availability = /** @class */ (function () {
    function availability(name, age, category) {
        var _this = this;
        this.addInformationinClass = function (history, characterstics) {
            _this.characterstics = characterstics;
            _this.history = history;
        };
        this.name = name;
        this.age = age;
        this.category = category;
    }
    return availability;
}());
;
var requests = /** @class */ (function () {
    function requests(reqCategory) {
        this.choiceArray = [];
        this.choiceArray.push(reqCategory);
    }
    return requests;
}());
//Function to insert new pet.
var insertPet = function (name, age, category) {
    var p = new availability(name, age, category);
    return p;
};
//Function to add pet history and characterstics.
var addInfo = function (classObj, petHistory, petCharacterstics) {
    classObj.addInformationInClass(petHistory, petCharacterstics);
    console.log("Added!");
};
//Function to add enquiries
var addEnquiries = function (categoryRequired) {
    var e = new requests(categoryRequired);
    return e;
};
//Function to check first 5 status
var checkStatus = function (classObj) {
    var result = [];
    for (var i = 0; i < 5; i++) {
        result.push(classObj[i].status);
    }
    return result;
};
//Function to find count of pets
var petCount = function (classObj) {
    return classObj.length;
};
