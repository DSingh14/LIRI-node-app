## LIRI Node App

### Introduction

* LIRI is a Language Interpretation and Recognition Interface.LIRI will be a command line node app that takes in parameters and gives you back data.
* LIRI available functions,when you enter them into the command line. 
	1. movie-this
	2. spotify-this-song
	3. consert-this
	4. do-what-it-says

# Setup
  1.	Clone the repository
  2.	Run npm install, and the following packages should be installed:
           1. Node-Spotify-API
           2. Axios : This module will be used to get the IMDB and BandsInTown API data
           3. Moment
           4. DotEnv
  3.	Create a .env file in the same directory as the rest of the files. In the .env file should be:
           1. '# Spotify API keys'
           2. 'SPOTIFY_ID=your-spotify-ID-here'
           3. 'SPOTIFY_SECRET=your-spotify-secret-here'  
  4.    Technologies Used:
  	   1. JavaScript
  	   2. Node.js
  	   3. Spotify API
  	   4. Bands in Town API
  	   5. OMDB API

# Example for movie
```
node liri.js movie-this '<movie name here>'
```
* this would output the following information to the terminal:
	1. Title
	2. Year
	3. IMDB Rating
	4. Rotten Tomatoes Rating
	5. Country
	6. Language
	7. Plot
	8. Actors
	
* Screenshot of output when we run "node liri.js movie-this" without any movie name.
![spotify example](https://github.com/DSingh14/LIRI-node-app/blob/master/image/moviethis_undefined.jpg)

* Screenshot of output when we run "node liri.js movie-this" with movie name.
![spotify example](https://github.com/DSingh14/LIRI-node-app/blob/master/image/moviethis_moviename.jpg)


# Example for spotify

```
node liri.js spotify-this-song '<song name here>'
```
* shows the following information about the song in the terminal
	1. artist(s)
	2. song name
	3. preview link of the song from spotify
	4. album that the song is a part of


* Screenshot of output when we run "node liri.js spotify-this song" without any song name.
![spotify example](https://github.com/DSingh14/LIRI-node-app/blob/master/image/spotifythissong_nosong.jpg)

* Screenshot of output when we run "node liri.js spotify-this song" with song name.
![spotify example](https://github.com/DSingh14/LIRI-node-app/blob/master/image/spotifythissong_withsong.jpg)
  
 # Example for concert
```
node liri.js concert-this <artist/band name here>
```
* this would output the following information to the terminal
	1. Name of the venue
	2. Venue location
	3. Date of the Event (use moment to format this as "MM/DD/YYYY") 

* Screenshot of output when we run "node liri.js concert-this " without any name.
![spotify example](https://github.com/DSingh14/LIRI-node-app/blob/master/image/concertthis_noname.jpg)

* Screenshot of output when we run "node liri.js concert-this " with name.
![spotify example](https://github.com/DSingh14/LIRI-node-app/blob/master/image/concertthis_name.jpg)

# Example for do what it says
```
node liri.js do-what-it-says
```
*A random.txt file with search for spotify-this-song "I want it that way." This will give you the spotify results of "I want it that way."

* Screenshot of output when we run "node liri.js what-it-says " as per file random.txt.
![spotify example](https://github.com/DSingh14/LIRI-node-app/blob/master/image/whattoget.jpg)






* Copyright
Deepali Singh (C) 2019. All Rights Reserved.
