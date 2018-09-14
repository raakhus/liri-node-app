var Spotify = require('node-spotify-api');
var spotifyKey = require('./key.js')
// console.log(spotifyKey.spotifyKey.id)

 
var spotify = new Spotify({
  id: spotifyKey.spotifyKey.id,
  secret: spotifyKey.spotifyKey.secret
});
 
spotify.search({ type: 'track', query: 'all the small things', limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 var json = JSON.stringify(data)
console.log(json); 
});


// 
// 
// 
// 
// 