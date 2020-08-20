var h1=document.createElement('h1');
h1.setAttribute('class','header1');
h1.innerText="Live Corona Cases";

var subHeading=document.createElement('p');
subHeading.setAttribute('class','subheader');
subHeading.innerText="Click the Button to get alerted of number of cases!";


async function putCards(){
    try{
         var getData=await fetch('https://api.covid19api.com/summary');
         var jsondata=await getData.json();
         var jsonCountries=jsondata.Countries;
         jsonCountries.forEach(element => {
             var keysArray=(Object.keys(element));
             var cards=document.createElement('div');
             cards.setAttribute('class','card');
             cards.classList.add('cardDetails');
             var cardTitle=document.createElement('h5');
             cardTitle.setAttribute('class','card-title');
             cardTitle.innerText=`${keysArray[0]} : ${element[keysArray[0]]}`;
             document.body.append(cards);
             cards.append(cardTitle);
             for(var i=1;i<(keysArray.length)-1;i++){
                var cardInner=document.createElement('p');
                cardInner.innerText=`${keysArray[i]} : ${element[keysArray[i]]}`
                cards.append(cardInner);   
            }
            var cardButton=document.createElement('button');
            cardButton.classList.add('btn','btn-primary','buttonStyler');
            cardButton.innerText="View Cases";
            cards.append(cardButton);
            cardButton.addEventListener("click",async function(){
                var getCoronaApi=await fetch(`https://api.covid19api.com/country/${element[keysArray[2]]}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`);
                var jsonCorona=await getCoronaApi.json();
                var count=1;
                var finalString
                jsonCorona.forEach(element1 => {
                    finalString=(element1.Cases);
                });
                alert("Total cases: "+finalString);
            });
            });
        }
    catch{

    }
}

document.body.append(h1);
document.body.append(subHeading);
putCards();

