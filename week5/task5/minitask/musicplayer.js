var container=document.createElement('div');
container.setAttribute('class','container');
container.setAttribute('id','containment');

var inserter=document.createElement('input');
inserter.setAttribute('type','text');
inserter.setAttribute("class",'insertBox');
inserter.setAttribute('id','insertbox');
inserter.setAttribute('placeholder','Enter song URL');

var button=document.createElement('button');
button.innerText="Add to PlayList!";

document.body.append(container);
container.append(inserter);
container.append(button);

button.addEventListener('click',async function(){
    var ip=document.getElementById('insertbox').value;
    console.log(ip);
    var fetcher=await fetch('https://5f3e1b0713a9640016a684f8.mockapi.io/mp3player',{
        method: "POST",
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify({
            "url": `${ip}`
        })})
   var fetcher1=await fetch('https://5f3e1b0713a9640016a684f8.mockapi.io/mp3player')
   var fetcherJson=await fetcher1.json();
   fetcherJson.forEach(element => {
       var audioBox=document.createElement('AUDIO');
       audioBox.setAttribute('controls','controls');
       audioBox.setAttribute('src',`${element.url}`);
       container.append(audioBox);
   });
});