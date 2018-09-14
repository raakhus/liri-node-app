require('dotenv').config(); 
console.log('this is loaded');

exports.spotifyKey = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};