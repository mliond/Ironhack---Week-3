var shoppingCart = require('./shoppingcart');
var item = require ('./item');

var my_cart = new shoppingCart();
var apple = new item("apple", 10);
var orange = new item("orange", 5);
var grape = new item("grape", 15);
var banana = new item("banana", 20);
var watermelon = new item("watermelon", 50);

my_cart.add_item(apple);
my_cart.add_item(apple);
my_cart.add_item(orange);
my_cart.add_item(orange);
my_cart.add_item(orange);
my_cart.add_item(orange);
my_cart.add_item(orange);
my_cart.add_item(orange);
my_cart.add_item(orange);
my_cart.add_item(watermelon);
my_cart.remove_item(orange);
my_cart.remove_item(apple, 1);

my_cart.checkout();

