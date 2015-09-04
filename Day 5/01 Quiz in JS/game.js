var read = require('read');

var Game = function () {
  this.question_array = [];
  this.current_question = 0;
  this.player_score = 0
};

Game.prototype.add_question = function (question) {
  this.question_array.push(question);
}

// This initiates the question and leads to bonus question
Game.prototype.start_game = function () {
  this.show_player_score();

  if ((this.current_question + 1) % 3 === 0) {
    var random_number = Math.floor(Math.random() * 10);
    this.ask_question(random_number);
    this.prompt_input(random_number);
  } else {
    this.ask_question(this.current_question);
    this.prompt_input(this.current_question);
  }
}

// This shows the player's score
Game.prototype.show_player_score = function () {
  console.log("Your Score: " + this.player_score);
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
    this.current_question += 1;
    if (question_number === this.current_question) {
      this.player_score += 2;
    } else {
      this.player_score += 1;
    };
  } else {
    console.log("Wrong answer");
    console.log("Hint: The capital starts with " + this.question_array[question_number].capital[0] + "...");
    this.player_score -= 1;
  }
  this.start_game();
};



module.exports = Game;