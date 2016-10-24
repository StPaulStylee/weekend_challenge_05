angular.module('giphyApp')
       .controller('APIController', APIController);

angular.module('giphyApp')
       .controller('FavoriteController', FavoriteController);

function APIController(giphy) {
  var api = this;
  console.log('APIController loaded');
  api.gif = [];
  api.favorite = {};


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
  console.log(api.favorite);
  giphy.submitFavorite(api.favorite).then(function(response){
    console.log('Response from Service: ', response);
    api.getFavorites();
  });
};

api.favoritesArr = [];

api.getFavorites = function() {
  giphy.getFavorites().then(function(response){
    console.log('Response from api cont. ', response);
    api.favoritesArr = response.data;
    api.favoritesCount = response.data.length;
  });
}

api.getRandom();
api.getFavorites();

}// End of APIController

function FavoriteController(giphy) {
  var fav = this;

fav.favoritesArr = [];
fav.favoritesCount = 0;

fav.getFavorites = function() {
  giphy.getFavorites().then(function(response){
    console.log('Response from fav cont. ', response);
    console.log('Image to view: ', response.data);
    fav.favoritesArr = response.data;
    fav.favoritesCount = response.data.length;
  });
}

fav.getFavorites();



}// End of FavoriteController
