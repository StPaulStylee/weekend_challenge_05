angular.module('giphyApp')
       .controller('APIController', APIController);

function APIController(giphy) {
  var api = this;
  console.log('APIController loaded');
  api.gif = [];
  api.favorite = {};
  api.favoriteList = [];


api.getRandom = function() {
  giphy.getRandom().then(function(rando){
    console.log('Response from random: ', rando);
    api.random = rando.image_url;
    api.gif.pop();
    api.gif.push(api.random);
    });
  };

api.getGif = function() {
  giphy.getGif(api.search).then(function(results){
    console.log('Results of query: ', results);
    if (results.length == 0) {
      alert('Sorry, no results found. Refactor your search and try again!');
    } else {
    api.result = results[0].images.downsized_large.url;
    api.gif.pop();
    api.gif.push(api.result);
    }
  });
}

api.submitFavorite = function(comment, gif) {
  api.favorite = {"url": gif[0], "comments": comment};
  api.favoriteList.push(api.favorite);
  console.log(api.favorite);
  giphy.submitFavorite(api.favorite).then(function(response){
    console.log('Response from Service: ', response);
  });
};
}// End of APIController
