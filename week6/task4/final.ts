async function nibba(){
var fetcher=await fetch(`https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?rapidapi-key=20363ac113mshb31c281692decb1p1a7cccjsn1d7b3f349556&locale=en-US&id=40008598`);
var fetcherJson=await fetcher.json();
console.log(fetcherJson);
}

nibba();