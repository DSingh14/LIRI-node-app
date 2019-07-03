// Dependencies
// ===================================
// read and set enviroment variables
require("dotenv").config();

// import API keys file
var keys = require("./keys.js");
// import node-spotify-api NPM package
var Spotify = require("node-spotify-api")
// initialize the Spotify API
var spotify = new Spotify(keys.spotify);
// import the axios and moment NPM package
var axios = require("axios");
var moment = require("moment");
// import the FS package for read/write
var fs = require("fs");

// Functions
// ==========================================

// Functions for movie search(movie-this)
var movieSearch = function (movieName) {
    if (movieName === undefined) {
        movieName = "Mr. Nobody";
    }
    // run axios with OMDB API for movie name and capture return
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(function (response) {
        var movieData = response.data;
        console.log("Title of the movie: " + movieData.Title);
        console.log("Movie released year: " + movieData.Year);
        console.log("IMBD rating of the movie: " + movieData.imdbRating);
        console.log("Rotten Tomatoes rating: " + movieData.Ratings);
        console.log("Country movie was produced: " + movieData.Produced);
        console.log("Language of the movie: " + movieData.Language);
        console.log("Plot of the movie: " + movieData.Plot);
        console.log("Actors of the movie: " + movieData.Actors);
        console.log("-----------------------------------");
    }
    );
};

// function for song form Spotify("spotify-this-song")
var songSearch = function (songTitle) {
    if (!songTitle) {
        songTitle = "Demon";
    }

    spotify.search({
        type: "track",
        query: songTitle
    },
        function (err, response) {
            if (err) {
                console.log("Error occured" + err);
                return;
            }
            console.log(JSON.stringify(response));
            var songs = response.tracks.items;
            // console.log(JSON.stringify(songs, null, 2));
            console.log(songs.length);
            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("artist(s): " + songs[i].artists[0].name);
                console.log("The songs name: " + songs[i].name);
                console.log("Preview link of song from spotify: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");

            }
        }
    );
};
// function for Bands in town(concert-this)

var concertSearch = function (artist) {
    if (!artist) {
        console.log("No upcoming concert" + artist);
        console.log(" best");
        return;
    }

    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function (response) {

            var concertInfo = response.data;
            for (var i = 0; i < concertInfo.length; i++) {
                var showDetail = concertInfo[i];
                console.log("Upcoming show : " + showDetail.venue.city + "," +
                    " Region or Country : " + (showDetail.venue.region || showDetail.venue.country) + " " +
                    "  at  " + showDetail.venue.name + "," + " date/time : " + moment(showDetail.datetime).format("MM/DD/YYYY")
                );
            }
        }
    );
};
// function for reading text for exiting file(do-what-it-says)
//  The code will store the contents of the reading inside the variable "data"
// We will then print the contents of data by var dataArr
var doWhatItSay = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
        console.log(dataArr);
        songSearch(dataArr[1]);

    })
};



if (process.argv[2] === "movie-this") {
    movieSearch(process.argv.slice(3).join(" "));
}
if (process.argv[2] === "spotify-this-song") {
    songSearch(process.argv.slice(3).join(" "));
}
if (process.argv[2] === "concert-this") {
    concertSearch(process.argv.slice(3).join(" "));
}
if (process.argv[2] === "do-what-it-says") {
    doWhatItSay();
}

