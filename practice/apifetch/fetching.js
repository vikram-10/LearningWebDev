var innerElements=document.createElement('div');
innerElements.innerText="";


var breaker=document.createElement('br');


var listing=document.createElement('ul');

var flag=document.createElement('img');


fetch('https://restcountries.eu/rest/v2/all')
.then(function(data){
    return data.json()
})
.then(function(newData){
     newData.forEach(element => {
         var country=document.createElement('div');
         country.innerText=element.name;
         var flag=document.createElement('img');
         flag.setAttribute('src',`${element.flag}`);
         document.body.append(country);
         document.body.append(flag);
     });
});


document.body.append(innerElements);


