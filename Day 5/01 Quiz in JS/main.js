var Question = require ('./question')
var Game = require ('./game')

var game = new Game();

game.add_question(new Question (1, "Netherlands", "Amsterdam"));
game.add_question(new Question (2, "Hungary", "Budapest"));
game.add_question(new Question (3, "Greece", "Athens"));
game.add_question(new Question (4, "Serbia", "Belgrade"));
game.add_question(new Question (5, "Germany", "Berlin"));
game.add_question(new Question (6, "Switzerland", "Bern"));
game.add_question(new Question (7, "Slovakia", "Bratislava"));
game.add_question(new Question (8, "Belgium", "Brussels"));
game.add_question(new Question (9, "Romania", "Bucharest"));
game.add_question(new Question (10, "Andorra", "Andorra la Vella"));


game.start_game();



/*
var question11 = new Question (11, "Moldova", "Chisinau");
var question12 = new Question (12, "Denmark", "Copenhagen");
var question1 = new Question (1, "Ireland", "Dublin");
var question1 = new Question (1, "Finland", "Helsinki");
var question1 = new Question (1, "Ukraine", "Kiev");
var question1 = new Question (1, "Portugal", "Lisbon");
var question1 = new Question (1, "Slovenia", "Ljubljana");
var question1 = new Question (1, "the United Kingdom", "London");
var question1 = new Question (1, "Luxembourg", "Luxembourg");
var question1 = new Question (1, "Spain", "Madrid");
var question1 = new Question (1, "Belarus", "Minsk");
var question1 = new Question (1, "Monaco", "Monaco");
var question1 = new Question (1, "Russia", "Moscow");
var question1 = new Question (1, "Cyprus", "Nicosia");
var question1 = new Question (1, "Greenland", "Nuuk");
var question1 = new Question (1, "Norway", "Oslo");
var question1 = new Question (1, "France", "Paris");
var question1 = new Question (1, "Montenegro", "Podgorica");
var question1 = new Question (1, "the Czech Republic", "Prague");
var question1 = new Question (1, "Iceland", "Reykjavik");
var question1 = new Question (1, "Latvia", "Riga");
var question1 = new Question (1, "Italy", "Rome");
var question1 = new Question (1, "San Marino", "San Marino");
var question1 = new Question (1, "Bosnia & Herzegovina", "Sarajevo");
var question1 = new Question (1, "Macedonia", "Skopje");
var question1 = new Question (1, "Bulgaria", "Sofia");
var question1 = new Question (1, "Sweden", "Stockholm");
var question1 = new Question (1, "Estonia", "Tallinn");
var question1 = new Question (1, "Albania", "Tirana");
var question1 = new Question (1, "Liechtenstein", "Vaduz");
var question1 = new Question (1, "Malta", "Valletta");
var question1 = new Question (1, "Vatican City", "Vatican City");
var question1 = new Question (1, "Austria", "Vienna");
var question1 = new Question (1, "Lithuania", "Vilnius");
var question1 = new Question (1, "Poland", "Warsaw");
var question1 = new Question (1, "Croatia", "Zagreb");
*/
