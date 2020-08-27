export class topArtists {
    artist:String;
    title:string;
    url:string;
    image:string;
    constructor(artists:string,title:string,url:string,image:string) {
        this.artist=artists;
        this.title=title;
        this.url=url;
        this.image=image;
    }
    createCard(){
        var card=document.createElement('div');
        card.setAttribute('class','cardExtra');
        card.innerHTML=`<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${this.image}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">${this.artist}</small></p>
              <audio controls>
              <source src="${this.url}" type="audio/ogg">
              Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>`
      document.body.append(card);
    }
}