function fileActionsRating(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);
   
    episodes = episodes.filter(function(episode, index) {
        return episode.rating >= 8.5;
    });

    episodes = episodes.sort(function(a, b){
      return a.episode_number-b.episode_number;
    });

    episodes.forEach(function (episode) {
	    console.log("Title " + episode.title + "Episode #: " + episode.episode_number);
	    console.log(episode.description);
	    console.log("Rating: " + episode.rating + (new Array(parseInt(episode.rating))).join("*"));
    })
}

module.exports = fileActionsRating;