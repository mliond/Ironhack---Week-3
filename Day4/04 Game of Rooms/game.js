var read = require('read');

var Game = function () {
  this.map = [];
  this.current_location = 0;
  this.user_inventory = [];
}

Game.prototype.add_room = function (room) {
  this.map.push(room);
}

Game.prototype.describe_location = function (number) {
  console.log("You are in a " + this.map[number].name);
  if (this.map[number].inventory != "") {
    console.log("You can see a " + this.map[number].inventory + " laying in the dark");
  }
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
    // self.move_user(direction)
    self.input_direction_or_inventory(direction);
    self.prompt_user();
  };
};

Game.prototype.input_direction_or_inventory = function (direction) {
  if (direction.indexOf("PICK") > -1 || direction.indexOf("DROP") > -1) {
    this.inventory_action(direction);
  } else {
    this.move_user(direction);
  };
}

Game.prototype.inventory_action = function(direction) {
  if (direction.indexOf("PICK") > -1 && direction.indexOf(this.map[this.current_location].inventory.toUpperCase() > -1)) {
    this.user_inventory.push(this.map[this.current_location].inventory);
    this.map[this.current_location].inventory = "";
    console.log("Your inventory is " + this.user_inventory);
  } else if (direction.indexOf("DROP") > -1 && direction.indexOf(this.user_inventory > -1)) {
    direction = direction.toLowerCase().replace("drop ", "");
    console.log(direction);
    var index = this.user_inventory.indexOf(direction);
    if (index > -1) {
      this.user_inventory.splice(index, 1);
    };
    console.log("Dropped the " + direction);
    console.log("Your inventory is " + this.user_inventory);
    this.map[this.current_location].inventory = direction;
  };
}

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