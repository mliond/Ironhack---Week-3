var fs = require('fs');
// var fileActions = require('./fileactions')
var fileActionsRating = require('./fileactions_rating')

// fs.readFile("./GoTEpisodes.json", 'utf8', fileActions);
fs.readFile("./GoTEpisodes.json", 'utf8', fileActionsRating);
