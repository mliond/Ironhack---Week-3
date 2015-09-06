var read = require('read');

var Game = function () {
  this.question_array = [];
  this.user_array = [];
  this.current_question = 0;
  this.player_score = 0;
  this.username = "";
};

Game.prototype.add_question = function (question) {
  this.question_array.push(question);
}

Game.prototype.add_user = function (user) {
  this.user_array.push(user);
}

// Asks for a username and sends it to the next function
Game.prototype.prompt_username = function () {
  var self = this;
  console.log("Welcome. Please type in your name:");
  read({prompt: "Username: "}, function (err, username){
    self.evaluate_username(err, username);
  });
};

// Checks user_array for the sent input and assigns values accordingly
Game.prototype.evaluate_username = function (err, username) {
  var self = this;
  this.user_array.map (function (i) {
    if (i.username === username) {
      self.username = username;
      self.current_question = i.current_question;
      self.player_score = i.player_score;
    } else  {
      self.username = username;
    }
  })
  this.start_game();
}

// // This returns a random number of bonus questions
// Game.prototype.get_random_number = function () {
//     var bonus_questions = Math.floor(this.question_array.length / 7);
//     var max = this.question_array.length + 1;
//     var min = this.question_array.length + 1 - bonus_questions;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// This initiates the question and leads to bonus question
Game.prototype.start_game = function () {
  this.show_player_score();
  if ((this.current_question + 1) % 7 === 0) {
    // var random_number = this.get_random_number();
    var random_number = Math.floor(Math.random()* (this.question_array.length + 1));
    this.ask_question(random_number);
    this.prompt_input(random_number);
  } else if ((this.current_question + 1) === this.question_array.length) {
    this.exit_game("err", "exit", 0);
  } else {
    this.ask_question(this.current_question);
    this.prompt_input(this.current_question);
  }
}

// This shows the player's score
Game.prototype.show_player_score = function () {
  console.log(this.username + "'s Score: " + this.player_score);
}

// This asks the question
Game.prototype.ask_question = function (question_number) {
  console.log("What is the capital of " + this.question_array[question_number].country + "?");
}

// This prompts for input, which is passed on to the exit_game function
Game.prototype.prompt_input = function (question_number) {
  var self = this;
  read({prompt: "Answer: "}, function (err, answer){
    self.exit_game(err, answer, question_number);
  });
}

// This checks if the player entered exit or not.
Game.prototype.exit_game = function (err, answer, question_number) {
  if (answer.toUpperCase() === "EXIT"){
    console.log("Thanks for playing. Your score is " + this.player_score);
  } else {
    this.evaluate_answer(answer, question_number);
  }
}

// This checks if the answer is correct or not (in uppercase)
Game.prototype.evaluate_answer = function (answer, question_number) {
  if (answer.toUpperCase() === this.question_array[question_number].capital.toUpperCase()) {
    if (!(question_number == this.current_question)) {
      this.player_score += 1; // bonus point
    };
    this.player_score += 1;
    this.current_question += 1;
  } else {
    console.log("Wrong answer");
    console.log("Hint: The capital starts with " + this.question_array[question_number].capital[0] + "...");
    this.player_score -= 1;
  }
  this.start_game();
};

module.exports = Game;