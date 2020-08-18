var header=document.createElement('h1');
header.innerText="Rest Countries";

var p1=new Promise(function(resolve,reject){
    var xhr=new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.send();
    xhr.onload=()=>{
        resolve(JSON.parse(xhr.response));
    }
});


p1.then(function(data){
  data.forEach(element => {
    var card=document.createElement('div');
    card.setAttribute('class','card');
    card.classList.add('cardstyle');
    var img=document.createElement('img');
    img.setAttribute('class','card-img-top');
    img.setAttribute('src',`${element.flag}`)
    var title=document.createElement('h5');
    title.setAttribute('class','card-title');
    title.innerText=`${element.name}`;
    var capital=document.createElement('p');
    capital.setAttribute('class','card-text');
    capital.innerHTML=`<b>Capital: </b> ${element.capital}`;
    var region=document.createElement('p');
    region.setAttribute('class','card-text');
    region.innerHTML=`<b>Region: </b>${element.region}`;
    var currency1=element.currencies;
    var currencyCode=document.createElement('p');
    currencyCode.setAttribute('class','card-text');
    var currencyName=document.createElement('p');
    currencyName.setAttribute('class','card-text');
    var currencySymbol=document.createElement('p');
    currencySymbol.setAttribute('class','card-text');
    currency1.forEach(innerElement=>{
       currencyCode.innerHTML=`<b>Currency Code: </b>${innerElement.code}`;
       currencyName.innerHTML=`<b>Currency Name: </b>${innerElement.name}`;
       currencySymbol.innerHTML=`<b>Currency Symbol: </b>${innerElement.symbol}`;
    });
    var latLong=element.latlng;
    var lattitude=document.createElement('p');
    lattitude.setAttribute('class','card-text');
    lattitude.innerHTML=`<b>Lattitude: </b>${latLong[0]}`;
    var longitude=document.createElement('p');
    longitude.setAttribute('class','card-text');
    longitude.innerHTML=`<b>Longitude: </b>${latLong[1]}`;
    document.body.append(card);
    card.append(img);
    card.append(title);
    card.append(capital);
    card.append(region);
    card.append(currencyCode);
    card.append(currencyName);
    card.append(currencySymbol);
    card.append(lattitude);
    card.append(longitude);
  });
})
.catch(function(err){
    console.log(err);
});


document.body.append(header);