/****************
 * REQUIREMENTS *
 ****************/
var express = require('express');
var app = express();
var mongoose =  require('mongoose');

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;) -done
    message: "Welcome to Adam's personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/AdamMenard/express-personal-api", // CHANGE ME -done
    baseUrl: "https://rocky-woodland-71835.herokuapp.com/", // CHANGE ME - done
    endpoints: [
      {method: "GET",
       path: "/api",
       description: "Describes all available endpoints"},
      {method: "GET",
       path: "/api/profile",
       description: "Information about Adam",
       githubUserName: String,
       githubLink: String,
       guthubProfileImage: String,
       personalSiteLink: String,
       currentCity: String,
       pets: [
         {name: "Molly",
          type: "Dog",
          breed: "Pom-Chi"}]
        }, // CHANGE ME - done
      {method: "POST",
       path: "/api/hobbies",
       description: "Creates a new hobby for Adam"} // CHANGE ME - done
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
