var header=document.createElement('h1');
header.innerText="Random GIPHY";



async function giphyDo(){
    try{
/*var searchBar=document.createElement('input');
searchBar.setAttribute('type','text');
searchBar.setAttribute('placeholder','enter giphy to search');   */     
var primaryFetcher=await fetch('https://random-word-api.herokuapp.com/word?number=1');
var pfJson=await primaryFetcher.json();
var fetcher=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=QT7eusdWRtMTRgJhgRjj0hnNYmDO0c1A&q=${pfJson[0]}&limit=25&offset=0&rating=g&lang=en`)
var jsonData= await fetcher.json();
var dataArray=jsonData.data;
dataArray.forEach(element => {
    console.log(element.embed_url);
    var images=document.createElement('object');
    images.setAttribute('data',`${element.embed_url}`);
    document.body.append(images);
});
    }
    catch(err){
        console.error(err);
    }
}

document.body.append(header);
giphyDo();
