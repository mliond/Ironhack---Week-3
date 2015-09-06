function blastOff(seconds, word) {
  countdown();

  function countdown() {
    console.log(seconds)
    seconds -= 1;
    if (seconds > 0) {
      setTimeout(countdown, 1000);
    } else {
      console.log(word)
    };
  }
}

blastOff(5, "Boom")