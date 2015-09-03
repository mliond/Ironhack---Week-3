var read = require('read');

var Game = function () {
  this.map = [];
  this.current_location = 0;
}

Game.prototype.add_room = function (room) {
  this.map.push(room);
}

Game.prototype.describe_location = function (number) {
  console.log("You are in a " + this.map[number].name);
};

Game.prototype.prompt_user = function () {
  var self = this; // because you cant call this in a function
  this.describe_location(this.current_location);
  read({prompt: "Direction: "}, function (err, direction){
    self.evaluate_input(err, direction);
  });
}

Game.prototype.evaluate_input = function (err, direction){
  var self = this; // because you cant call this in a function
  console.log("chose: " + direction);
  direction = direction.toUpperCase();
  if (direction != "F") {
    self.move_user(direction);
    self.prompt_user();
  };
};

Game.prototype.move_user = function (direction) {
  switch(direction) {
    case "N":
      this.current_location = 1
      break;
    case "E":
      this.current_location = 2
      break;
    case "S":
      this.current_location = 3
      break;
    case "W":
      this.current_location = 4
      break;
    default:
      this.current_location = 0
  };
};

module.exports = Game;