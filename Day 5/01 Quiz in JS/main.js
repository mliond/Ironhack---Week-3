var Question = require ('./question')
var User = require ('./user')
var Game = require ('./game')

var game = new Game();

game.add_user(new User("Kevin", 3, 2));
game.add_user(new User("Anna", 1, 1));

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
game.add_question(new Question (11, "Moldova", "Chisinau"));
game.add_question(new Question (12, "Denmark", "Copenhagen"));
game.add_question(new Question (11, "Ireland", "Dublin"));
game.add_question(new Question (12, "Finland", "Helsinki"));
game.add_question(new Question (13, "Ukraine", "Kiev"));
game.add_question(new Question (14, "Portugal", "Lisbon"));
game.add_question(new Question (15, "Slovenia", "Ljubljana"));
game.add_question(new Question (16, "the United Kingdom", "London"));
game.add_question(new Question (17, "Luxembourg", "Luxembourg"));
game.add_question(new Question (18, "Spain", "Madrid"));
game.add_question(new Question (19, "Belarus", "Minsk"));
game.add_question(new Question (20, "Monaco", "Monaco"));
game.add_question(new Question (21, "Russia", "Moscow"));
game.add_question(new Question (22, "Cyprus", "Nicosia"));
game.add_question(new Question (23, "Greenland", "Nuuk"));
game.add_question(new Question (24, "Norway", "Oslo"));
game.add_question(new Question (25, "France", "Paris"));
game.add_question(new Question (26, "Montenegro", "Podgorica"));
game.add_question(new Question (27, "the Czech Republic", "Prague"));
game.add_question(new Question (28, "Iceland", "Reykjavik"));
game.add_question(new Question (29, "Latvia", "Riga"));
game.add_question(new Question (30, "Italy", "Rome"));
game.add_question(new Question (31, "San Marino", "San Marino"));
game.add_question(new Question (32, "Bosnia & Herzegovina", "Sarajevo"));
game.add_question(new Question (33, "Macedonia", "Skopje"));
game.add_question(new Question (34, "Bulgaria", "Sofia"));
game.add_question(new Question (35, "Sweden", "Stockholm"));
game.add_question(new Question (36, "Estonia", "Tallinn"));
game.add_question(new Question (37, "Albania", "Tirana"));
game.add_question(new Question (38, "Liechtenstein", "Vaduz"));
game.add_question(new Question (39, "Malta", "Valletta"));
game.add_question(new Question (40, "Vatican City", "Vatican City"));
game.add_question(new Question (41, "Austria", "Vienna"));
game.add_question(new Question (42, "Lithuania", "Vilnius"));
game.add_question(new Question (43, "Poland", "Warsaw"));
game.add_question(new Question (44, "Croatia", "Zagreb"));

game.prompt_username();

