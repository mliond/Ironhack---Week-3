var Car = function (brand, speed) {

  this.brand = brand;
  this.speed = speed; 
  var current_speed = 0;

  this.accelerate = function (inc){
    current_speed += inc;
    if (current_speed >= speed) {
      current_speed = speed; 
      console.log("You reached your maximum speed of " + speed + " km/h.");
    };
  }; 

  this.brake = function (dec){
    current_speed -= dec;
    if (current_speed <= 0) {
      current_speed = 0;
      console.log("You are standing still at " + current_speed + " km/h.")
    };
  };

  this.driving = function() {
    if (current_speed === 0){
      console.log("You are standing still at " + current_speed + " km/h.")
    } else {
      console.log("You're currently driving " + current_speed + " km/h.")
    };
  };
};

var car = new Car("Ferrari", 200);
car.accelerate(210);
car.brake(300);
car.driving();