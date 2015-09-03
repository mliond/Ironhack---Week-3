var read = require('read');
var Room = require ('./rooms')
var Game = require ('./game')

var game = new Game ();
var room0 = new Room (0, "C", "There is a bear");
var room1 = new Room (1, "N", "There is a bear");
var room2 = new Room (2, "E", "There is a bear");
var room3 = new Room (3, "S", "There is a bear");
var room4 = new Room (4, "W", "There is a bear");

game.add_room(room0);
game.add_room(room1);
game.add_room(room2);
game.add_room(room3);
game.add_room(room4);

game.prompt_user();