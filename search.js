var request = require("request");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotifyKey = require('./key.js')

// Create the TV constructor
var Search = function () {

    var divider = "\n------------------------------------------------------------\n\n";


    this.findMovie = function (movie) {
        var URL = "http://www.omdbapi.com/?t=" + movie + "=&plot=short&apikey=trilogy";

        request(URL, function (err, response, body) {

            var jsonData = JSON.parse(body);

            var movieData = [
                "Title: " + jsonData.Title,
                "Year: " + jsonData.Year,
                "Rating: " + jsonData.Rated,
                "Runtime: " + jsonData.Runtime,
                "Plot: " + jsonData.Plot
            ].join("\n\n");


            fs.appendFile("searchlog.txt", movieData + divider, function (err) {
                if (err) throw err;
                console.log(movieData);
            });
        });
    };
    this.findSong = function (song) {
        var spotify = new Spotify({
            id: spotifyKey.spotifyKey.id,
            secret: spotifyKey.spotifyKey.secret
        });
        spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
            if (err) {
                return console.log("I'm not good enough for you");
            }
            var songData = [
                "Title: " + data.tracks.items[0].name,
                "Explicit: " + data.tracks.items[0].explicit,
                "Runtime (seconds): " + data.tracks.items[0].duration_ms / 1000,
                "Artists: " + data.tracks.items[0].artists[0].name
            ].join("\n\n");


            fs.appendFile("searchlog.txt", songData + divider, function (err) {
                if (err) throw err;
                console.log(songData);
            });
        });
    };

    this.findConcert = function (movie) {
        var URL = "http://www.omdbapi.com/?t=" + movie + "=&plot=short&apikey=trilogy";

        request(URL, function (err, response, body) {

            var jsonData = JSON.parse(body);

            var movieData = [
                "Title: " + jsonData.Title,
                "Year: " + jsonData.Year,
                "Rating: " + jsonData.Rated,
                "Runtime: " + jsonData.Runtime,
                "Plot: " + jsonData.Plot
            ].join("\n\n");


            fs.appendFile("searchlog.txt", movieData + divider, function (err) {
                if (err) throw err;
                console.log(movieData);
            });
        });
    };
};

module.exports = Search;
