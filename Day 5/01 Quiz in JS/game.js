var read = require('read');

var Game = function () {
  this.question_array = [];
};

Game.prototype.add_question = function (question) {
  this.question_array.push(question);
}

Game.prototype.start_game = function () {
  console.log("hi");
  this.prompt_input;
}

Game.prototype.ask_question = function (question) {
  console.log("What is the capital of " + question.country + "?");
}

Game.prototype.prompt_input = function () {
  var self = this;
  read({prompt: "Answer: "}, function (err, answer){
    self.evaluate_answer(err, anwer);
  });
}

Game.prototype.evaluate_answer = function (err, answer) {
  console.log("yoyoyo")
  // answer?
}

module.exports = Game;