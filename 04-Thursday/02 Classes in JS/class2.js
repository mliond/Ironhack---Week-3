var Car = function (brand, max_speed) {
  // initialize
  this.brand = brand;
  this.max_speed = max_speed;
  this.current_speed = 0;
};

// instead of this. inside the class, you can put Car.prototype. outside the class.
// Benefit: Methods are not created again for each new instance.
Car.prototype.accelerate = function (inc){
  this.current_speed += inc;
  if (this.current_speed >= this.max_speed) {
    this.current_speed = this.max_speed;
    console.log("You reached your maximum speed of " + this.max_speed + " km/h.");
  };
};

Car.prototype.brake = function (dec){
  this.current_speed -= dec;
  if (this.current_speed <= 0) {
    this.current_speed = 0;
    console.log("You are standing still at " + this.current_speed + " km/h.")
  };
};

Car.prototype.driving = function() {
  if (this.current_speed === 0){
    console.log("You are standing still at " + this.current_speed + " km/h.")
  } else {
    console.log("You're currently driving " + this.current_speed + " km/h.")
  };
};

var car = new Car("Ferrari", 200);
car.accelerate(210);
car.brake(300);
car.driving();