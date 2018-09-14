require('dotenv').config(); 
console.log('this is loaded');

exports.spotifyKey = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
  OMDB: process.env.OMDB_KEY,
  BANDS: process.env.BANDS_IN_TOWN_KEY
};