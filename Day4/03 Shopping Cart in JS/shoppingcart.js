var shoppingCart = function() {
  // initialize empty cart array
  this.cart = [];
  this.total = 0;
};

// This adds a specified item to the cart.
shoppingCart.prototype.add_item = function (item) {
  this.cart.push(item);
  console.log("Adding an " + item.nameof + " at a price of " + item.price);
};

// This removes a specified item from the cart.
shoppingCart.prototype.remove_item = function (item) {

  this.cart = this.cart.filter(function(fruit, index) {
    return fruit.nameof != item.nameof;
  });


  // if (number === undefined) {
  //   number = 99;
  // };

  // for (var i = 0; i < number; i ++) {
  //   var index = this.cart.indexOf(item);
  //   if (index > -1) {
  //       this.cart.splice(index, 1);
  //   };
  // }

  console.log(this.cart);
};

shoppingCart.prototype.checkout = function () {
  this.total = this.cart.reduce (function (sum, item) {
    return sum + item.price}, 0);
  console.log("Your total is " + this.total);
  this.more_than_five_items();
};

// this function checks if there are more than five items in the cart. if yes,
// total is reduced by 10%
shoppingCart.prototype.more_than_five_items = function () {
  if (this.cart.length > 5) {
    console.log("You have more than five items. You get a discount of 10%!!");
    this.total = this.total * 0.9;
  };
  this.two_apples_one_free();
};

// this checks if there are more than two apples. if yes -> total is reduced by half the
// apple's price.
shoppingCart.prototype.two_apples_one_free = function () {
  var number_apples = 0;
  var price_apples = 0;
  this.cart.forEach (function (item) {
    if (item.nameof === "apple") {
      number_apples += 1;
      price_apples = item.price;
    };
  });
  if (number_apples >= 2) {
    this.total = this.total - ((number_apples / 2) * price_apples);
    console.log("You have " + number_apples + " apples. " + (number_apples / 2) + " of them is/are free!");
  };
  this.more_than_five_orange();
};

shoppingCart.prototype.more_than_five_orange = function () {
  var number_orange = 0;
  var price_orange = 0;
  this.cart.forEach (function (item) {
    if (item.nameof === "orange") {
      number_orange += 1;
      price_orange = item.price;
    };
  });
  if (number_orange >= 5) {
    this.total = this.total - (((number_orange - 5) / 2) * price_orange);
    console.log("You have " + number_orange + " orange. You get " + (number_orange - 5) + " of them half off.");
  };
};


module.exports = shoppingCart;