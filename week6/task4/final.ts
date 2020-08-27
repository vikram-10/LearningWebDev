var unirest = require("unirest");

var req = unirest("GET", "https://shazam.p.rapidapi.com/songs/list-recommendations");

req.query({
	"locale": "en-US",
	"key": "484129036"
});

req.headers({
	"x-rapidapi-host": "shazam.p.rapidapi.com",
	"x-rapidapi-key": "20363ac113mshb31c281692decb1p1a7cccjsn1d7b3f349556",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});