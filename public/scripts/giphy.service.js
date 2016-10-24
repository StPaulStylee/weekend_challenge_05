angular.module('giphyApp')
       .service('giphy', GiphyAPIService);

function GiphyAPIService($http) {
  var API = 'http://api.giphy.com/v1/gifs';
  var key = 'dc6zaTOxFJmzC';

// Get a random gif from API and sends object back to controller
  this.getRandom = function () {
    return $http.get(API + '/random', {
      params: {
        api_key: key,
        rating: 'y'
      }
    }).then(function(response){
      return response.data.data;
    });
  };

// Uses search query to find gif and sends object back to the controller
  this.getGif = function(query) {
    return $http.get(API + '/search', {
      params: {
        api_key: key,
        rating: 'y',
        q: query
      }
    }).then(function(response){
      return response.data.data;
    });
  }

// Sends a post request that contains data of favorited gif to the favorites router
  this.submitFavorite = function(favorite) {
    return $http.post('/favorites', favorite)
      .then(function(response){
        return response;
      });
  };

// Sends a GET request to the router and turns the data to the controller
  this.getFavorites = function() {
    return $http.get('/favorites')
      .then(function(response){
        return response;
      });
  }

}
