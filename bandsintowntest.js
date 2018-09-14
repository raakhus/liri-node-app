var spotifyKey = require('./key.js')
var bandsintown = require('bandsintown')(spotifyKey.spotifyKey.BANDS);

 
bandsintown
  .getArtistEventList('Skrillex')
  .then(function(events) {
    console.log(JSON.stringify(events))
  });