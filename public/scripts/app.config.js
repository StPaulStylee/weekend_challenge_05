// Angular routes that place HTML templates into the view
angular.module('giphyApp')
       .config(function($routeProvider, $locationProvider){
         $routeProvider.when('/home', {
           templateUrl: 'views/home.html',
           controller: 'APIController as api'
         }).when('/favorites', {
           templateUrl: 'views/favorites.html',
           controller: 'APIController as api'
         }).otherwise({
           redirectTo: '/home'
         });
         $locationProvider.html5Mode(true);
       });
