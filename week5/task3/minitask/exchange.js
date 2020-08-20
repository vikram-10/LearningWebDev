
async function getStuff(){
    try{
  var allCountries=await fetch('https://api.covid19api.com/summary')
      var allCjson=await allCountries.json();
      var countries=allCjson.Countries;
      countries.forEach(element => {
          var cards=document.createElement('div');
          cards.setAttribute('class','card');
          cards.classList.add('cardClass');
          var cardTitle=document.createElement('h4');
          cardTitle.setAttribute('class','card-title');
          cardTitle.innerHTML=`Name : ${element.Country}`;
          var cardText1=document.createElement('p');
          cardText1.setAttribute('class','card-text');
          cardText1.innerText=`Country Code: ${element.CountryCode}`;
          var cardText2=document.createElement('p');
          cardText2.setAttribute('class','card-text');
          cardText2.innerText=`Slug: ${element.Slug}`;
          var cardText3=document.createElement('p');
          cardText3.setAttribute('class','card-text');
          cardText3.innerText=`New Confirmed : ${element.NewConfirmed}`;
          var cardText4=document.createElement('p');
          cardText4.setAttribute('class','card-text');
          cardText4.innerText=`Total Confirmed : ${element.TotalConfirmed}`;
          var cardText5=document.createElement('p');
          cardText5.setAttribute('class','card-text');
          cardText5.innerText=`New Deaths : ${element.NewDeaths}`;
          var cardText6=document.createElement('p');
          cardText6.setAttribute('class','card-text');
          cardText6.innerText=`Total Deaths : ${element.TotalDeaths}`;
          var cardText7=document.createElement('p');
          cardText7.setAttribute('class','card-text');
          cardText7.innerText=`New Recovered : ${element.NewRecovered}`;
          var cardText8=document.createElement('p');
          cardText8.setAttribute('class','card-text');
          cardText8.innerText=`Total Recovered : ${element.TotalRecovered}`;
          var cardText9=document.createElement('p');
          cardText9.setAttribute('class','card-text');
          cardText9.innerText=`Date : ${element.Date}`;
          var button=document.createElement('button');
          button.setAttribute('onclick',`callingCases(${element.Slug})`);
          button.innerText="Covid Cases";
          document.body.append(cards);
          cards.append(cardTitle);
          cards.append(cardText1);
          cards.append(cardText2);
          cards.append(cardText3);
          cards.append(cardText4);
          cards.append(cardText5);
          cards.append(cardText6);
          cards.append(cardText7);
          cards.append(cardText8);
          cards.append(cardText9);
          cards.append(button);
      });
    }
    catch(err){
        console.error(err);
    }
}
getStuff();