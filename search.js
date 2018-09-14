var request = require("request");
var moment = require('moment')
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotifyKey = require('./key.js')
var bandsintown = require('bandsintown')(spotifyKey.spotifyKey.BANDS);


// Create the TV constructor
var Search = function () {

    var divider = "\n------------------------------------------------------------\n\n";


    this.findMovie = function (movie) {
        var URL = "http://www.omdbapi.com/?t=" + movie + "=&plot=short&apikey=" + spotifyKey.spotifyKey.OMDB;

        request(URL, function (err, response, body) {

            var jsonData = JSON.parse(body);

            var movieData = [
                "Title: " + jsonData.Title,
                "Year: " + jsonData.Year,
                "Rating: " + jsonData.Rated,
                "Runtime: " + moment.utc(parseInt(jsonData.Runtime)*60*1000).format('HH:mm:ss'),
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
                "Runtime: " + moment.utc(data.tracks.items[0].duration_ms*1000).format('HH:mm:ss'),
                "Artists: " + data.tracks.items[0].artists[0].name
            ].join("\n\n");

            
            fs.appendFile("searchlog.txt", songData + divider, function (err) {
                if (err) throw err;
                console.log(songData);
            });
        });
    };

    this.findConcert = function (artist) {
        bandsintown.getArtistEventList(artist).then(function (events) {
            var artistData = [
                "Event: " + events[0].title,
                "Date: " + events[0].formatted_datetime,
                "location: " + events[0].formatted_location,
                "Tickets?: " + events[0].ticket_status,
                "Ticket Type: " + events[0].ticket_type,
                'Tickets Sale Starts:'+ moment(events[0].on_sale_datetime).format('LLL'),

            ].join("\n\n");
    
    
            fs.appendFile("searchlog.txt", artistData + divider, function (err) {
                if (err) throw err;
                console.log(artistData);
            });
        });
    };
};

module.exports = Search;
