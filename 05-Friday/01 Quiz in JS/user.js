var User = function (username, score, question) {
  this.username = username;
  this.player_score = score;
  this.current_question = question;
}

module.exports = User;