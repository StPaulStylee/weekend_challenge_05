// Angular routes that place HTML templates into the view
angular.module('giphyApp')
       .config(function($routeProvider, $locationProvider){
         $routeProvider.when('/home', {
           templateUrl: 'views/home.html',
           controller: 'APIController as api'
         }).when('/favorites', {
           templateUrl: 'views/favorites.html',
           controller: 'FavoriteController as fav'
         }).otherwise({
           redirectTo: '/home'
         });
         $locationProvider.html5Mode(true);
       });
