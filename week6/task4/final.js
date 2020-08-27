"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var topartists_js_1 = require("./topartists.js");
var recom_js_1 = require("./recom.js");
var toptrackButton = document.getElementById('topTracks');
toptrackButton === null || toptrackButton === void 0 ? void 0 : toptrackButton.addEventListener('click', function () {
    storeTopartists();
});
var recommendedButton = document.getElementById('reco');
recommendedButton === null || recommendedButton === void 0 ? void 0 : recommendedButton.addEventListener('click', function () {
});
var removeButton = document.getElementById('remove');
removeButton === null || removeButton === void 0 ? void 0 : removeButton.addEventListener('click', function () {
    var allCards = document.getElementsByClassName('cardExtra');
    for (var i = 0; i < allCards.length; i++) {
        allCards[i].remove();
    }
});
function storeTopartists() {
    return __awaiter(this, void 0, void 0, function () {
        var counter, fetcher, fetcherJson, tracks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    counter = 0;
                    return [4 /*yield*/, fetch('https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?rapidapi-key=20363ac113mshb31c281692decb1p1a7cccjsn1d7b3f349556&locale=en-US&id=40008598')];
                case 1:
                    fetcher = _a.sent();
                    return [4 /*yield*/, fetcher.json()];
                case 2:
                    fetcherJson = _a.sent();
                    tracks = fetcherJson.tracks;
                    tracks.forEach(function (element) {
                        if (element.hub.actions == undefined) {
                            return;
                        }
                        else {
                            var url = (element.hub.actions[1].uri);
                            var title = (element.title);
                            var artist = element.subtitle;
                            var image = (element.share.image);
                            var p = new topartists_js_1.topArtists(artist, title, url, image);
                            p.createCard();
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function recoArtists() {
    return __awaiter(this, void 0, void 0, function () {
        var counter, fetcher, fetcherJson, tracks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    counter = 0;
                    return [4 /*yield*/, fetch('https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036&rapidapi-key=20363ac113mshb31c281692decb1p1a7cccjsn1d7b3f349556')];
                case 1:
                    fetcher = _a.sent();
                    return [4 /*yield*/, fetcher.json()];
                case 2:
                    fetcherJson = _a.sent();
                    tracks = fetcherJson.tracks;
                    tracks.forEach(function (element) {
                        if (element.hub.actions == undefined) {
                            return;
                        }
                        else {
                            var url = (element.hub.actions[1].uri);
                            var title = (element.title);
                            var artist = element.subtitle;
                            var image = (element.share.image);
                            var p = new recom_js_1.recommended(artist, title, url, image);
                            p.createCard();
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);
