var fs = require("fs");
var inquirer = require('inquirer')
var Search = require('./search')
var search = new Search();
inquirer.prompt([

  {
    type: "list",
    name: "list",
    message: "select something to search",
    choices: ['Search spotify for information on songs', 'Search OMDB for information on movies', 'Search Bands in Town for information on concerts', "I'm not bold enough to choose"]
  },

  {
    type: "input",
    name: "input",
    message: "search: "

  }

]).then(function (answers) {
  if (answers.list === 'Search spotify for information on songs') {
    console.log('searching Spotify for information on' + answers.input)
    search.findSong(answers.input);
  }
  if (answers.list === 'Search OMDB for information on movies') {
    console.log('searching OMDB for information on ' + answers.input)
    search.findMovie(answers.input);
  }
  if (answers.list === 'Search Bands in Town for information on concerts') {
    console.log('searching Bands in Town for information on' + answers.input)
    search.findConcert(answers.input);
  }
  if (answers.list === "I'm not bold enough to choose") {
    console.log('You are not bold and Get what I spit out')
    fs.readFile("random.txt", "utf8", function (err, data) {
      search.findSong(data)
    });
  };
});

