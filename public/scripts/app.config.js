// Angular routes that place HTML templates into the view
angular.module('giphyApp')
       .config(function($routeProvider, $locationProvider){
         $routeProvider.when('/home', {
           templateUrl: 'views/home.html',
           controller: 'MainController as main'
         }).when('/favorites', {
           templateUrl: 'views/favorites.html',
           controller: 'MainController as main'
         });
         $locationProvider.html5Mode(true);
       });
