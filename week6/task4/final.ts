import {topArtists}  from  "./topartists.js";
import {recommended} from  "./recom.js";


var toptrackButton=document.getElementById('topTracks');
toptrackButton?.addEventListener('click',function(){
    storeTopartists();
});

var recommendedButton=document.getElementById('reco');
recommendedButton?.addEventListener('click',function(){
       recoArtists();
});

var removeButton=document.getElementById('remove');
removeButton?.addEventListener('click',function(){
  var allCards=document.getElementsByClassName('cardExtra');
  for(let i=0;i<allCards.length;i++){
	  allCards[i].remove();
  }
});
async function storeTopartists(){
	let counter=0;
	let fetcher=await fetch('https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?rapidapi-key=20363ac113mshb31c281692decb1p1a7cccjsn1d7b3f349556&locale=en-US&id=40008598');
	let fetcherJson=await fetcher.json();
	let tracks=fetcherJson.tracks;
	tracks.forEach((element:any) => {
		if(element.hub.actions==undefined){
			return ;
		}
		else{
			let url=(element.hub.actions[1].uri);
			let title=(element.title);
			let artist=element.subtitle;
			let image=(element.share.image)
			let p=new topArtists(artist,title,url,image);
			p.createCard();
		}
	});
}

async function recoArtists(){
	let counter=0;
	let fetcher=await fetch('https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036&rapidapi-key=20363ac113mshb31c281692decb1p1a7cccjsn1d7b3f349556');
	let fetcherJson=await fetcher.json();
	let tracks=fetcherJson.tracks;
	tracks.forEach((element:any) => {
		if(element.hub.actions==undefined){
			return ;
		}
		else{
			let url=(element.hub.actions[1].uri);
			let title=(element.title);
			let artist=element.subtitle;
			let image=(element.share.image)
			let p=new recommended(artist,title,url,image);
			p.createCard();
		}
	});
}

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

