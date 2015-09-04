function fileActionsRating(err, file){ 
    if (err) {
      throw err;
    } else {
      var episodes = JSON.parse(file);
      filterEpisodes(episodes);
    }
}

// This function filters out episodes with a rating < 8.5
function filterEpisodes(episodes) {
    episodes = episodes.filter(function(episode, index) {
      return episode.rating >= 8.5;
    });
    searchForRobert(episodes);
}

// This function filters out episodes that don't feature have 'Robert' it their description
function searchForRobert(episodes) {
    episodes = episodes.filter(function(episode, index) {
      return (episode.description.indexOf("Robert") > -1);
    });
    sortEpisodes(episodes);
}

// This function sorts the episodes according to episode number
function sortEpisodes(episodes) {
    episodes = episodes.sort(function(a, b){
      return a.episode_number-b.episode_number;
    });
    printEpisodes(episodes);
}

// This function prints the episodes according to the demanded layout
function printEpisodes(episodes) {
    episodes.forEach(function (episode) {
      console.log("Title " + episode.title + "Episode #: " + episode.episode_number);
      console.log(episode.description);
      console.log("Rating: " + episode.rating + (new Array(parseInt(episode.rating))).join("*"));
    })
}

module.exports = fileActionsRating;