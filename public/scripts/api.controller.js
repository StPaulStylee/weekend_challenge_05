angular.module('giphyApp')
       .controller('APIController', APIController);

angular.module('giphyApp')
       .controller('FavoriteController', FavoriteController);

function APIController(giphy) {
  var api = this;
  api.gif = [];
  api.favorite = {};
  api.favoritesArr = [];

// Tell giphy.service to make a random GET request to API
// Send received gif to an array so it can be displayed to the view
api.getRandom = function() {
  giphy.getRandom().then(function(rando){
    api.random = rando.image_url;
    api.gif.pop();
    api.gif.push(api.random);
    });
  };

// Tell giphy.service to search for a specified gif in the API
// Send received gif to an array so it can be displayed to the view
api.getGif = function() {
  giphy.getGif(api.search).then(function(results){
    if (results.length == 0) {
      alert('Sorry, no results found. Refactor your search and try again!');
    } else {
    api.result = results[0].images.downsized_large.url;
    api.gif.pop();
    api.gif.push(api.result);
    }
  });
  api.search = '';
}

// Submit data from view into an object so it can be entered into a
// submitFavorite function in our giphy.service and sent to the database
api.submitFavorite = function(comment, gif) {
  api.favorite = {"url": gif[0], "comments": comment};
  giphy.submitFavorite(api.favorite).then(function(response){
    api.getFavorites();
  });
  api.comment = '';
};

// Tell giphy.service to run a function that will run a GET request to the DB
// Data received from DB is then put into arrays so it can be displayed in the view
api.getFavorites = function() {
  giphy.getFavorites().then(function(response){
    api.favoritesArr = response.data;
    api.favoritesCount = response.data.length;
  });
}

// Functions called so random GIF and favorites are available on load
api.getRandom();
api.getFavorites();

}

function FavoriteController(giphy) {
  var fav = this;

fav.favoritesArr = [];
fav.favoritesCount = 0;

// Tell giphy.service to run a function that will run a GET request to the DB
// Data received from DB is then put into arrays so it can be displayed in the view
fav.getFavorites = function() {
  giphy.getFavorites().then(function(response){
    fav.favoritesArr = response.data;
    fav.favoritesCount = response.data.length;
  });
}

// Functions called so random GIF and favorites are available on load
fav.getFavorites();

}
