angular.module('giphyApp')
       .controller('MainController', MainController);

function MainController(giphy) {
  var main = this;
  console.log('MainController loaded');
}
