// require("dotenv").config();
var request = require("request");

inquirer.prompt([
// change to user inputs to search for the required shit, once user makes a selection ask approiate question to get the right search use list
    // {
    //   type: "input",
    //   name: "name",
    //   message: "Who are you???"
    // },
  
    // {
    //   type: "list",
    //   name: "doingWhat",
    //   message: "What are you doing in my house??",
    //   choices: ["I made you cookies!", "No lie dude. I'm here to rob you.", "Uh. This is my house... Who are YOU???"]
    // },
  
    // {
    //   type: "checkbox",
    //   name: "carryingWhat",
    //   message: "What are you carrying in your hands??",
    //   choices: ["TV", "Slice of Toast", "Butter Knife"]
    // },
  
    // {
    //   type: "confirm",
    //   name: "canLeave",
    //   message: "Can you leave now?"
    // }
  
  ]).then(request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }
  }));