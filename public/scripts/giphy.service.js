angular.module('giphyApp')
       .service('giphy', GiphyAPIService);

function GiphyAPIService($http) {
  var API = 'http://api.giphy.com/v1/gifs';
  var key = 'dc6zaTOxFJmzC';

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

  this.submitFavorite = function(favorite) {
    console.log('From Service: ', favorite);
    return $http.post('/favorites', favorite)
      .then(function(response){
        return response;
      });
  };

  this.getFavorites = function() {
    return $http.get('/favorites')
      .then(function(response){
        return response;
      });
  }

}
