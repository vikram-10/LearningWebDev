"use strict";
exports.__esModule = true;
exports.topArtists = void 0;
var topArtists = /** @class */ (function () {
    function topArtists(artists, title, url, image) {
        this.artist = artists;
        this.title = title;
        this.url = url;
        this.image = image;
    }
    topArtists.prototype.createCard = function () {
        var card = document.createElement('div');
        card.setAttribute('class', 'cardExtra');
        card.innerHTML = "<div class=\"card mb-3\" style=\"max-width: 540px;\">\n        <div class=\"row no-gutters\">\n          <div class=\"col-md-4\">\n            <img src=\"" + this.image + "\" class=\"card-img\" alt=\"...\">\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.title + "</h5>\n              <p class=\"card-text\">" + this.artist + "</small></p>\n              <audio controls>\n              <source src=\"" + this.url + "\" type=\"audio/ogg\">\n              Your browser does not support the audio element.\n              </audio>\n            </div>\n          </div>\n        </div>\n      </div>";
        document.body.append(card);
    };
    return topArtists;
}());
exports.topArtists = topArtists;
