var Spotify = require('node-spotify-api');
var spotifyKey = require('./key.js')
// console.log(spotifyKey.spotifyKey.id)

 function findSong(){
var spotify = new Spotify({
  id: spotifyKey.spotifyKey.id,
  secret: spotifyKey.spotifyKey.secret
});
 
spotify.search({ type: 'track', query: 'all the small things', limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
 console.log(data)
 console.log(data.tracks.items[0].name)
console.log("you found it"); 
});
 }
 findSong();


// var spotify = new Spotify({
//     id: spotifyKey.spotifyKey.id,
//     secret: spotifyKey.spotifyKey.secret
// });
// spotify.search({ type: 'track', query: 'all the small things', limit: 1 }, function (err, data) {
//     if (err) {
//         return console.log("I'm not good enough for you");
//     }
//     var json = JSON.parse(data)
//     console.log(json.data)
//     console.log(json.data.tracks.items.name)


//     var songData = [
//         "Title: " + data.tracks.items.name,
//         "Explicit: " + data.tracks.items.explicit,
//         "Runtime (seconds): " + data.tracks.items.duration_ms / 1000,
//         "Artists: " + data.tracks.items.artists.name
//     ].join("\n\n");
// console.log(songData)
// });