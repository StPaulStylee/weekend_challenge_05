angular.module('giphyApp')
       .controller('MainController', MainController);

function MainController(giphy) {
  var main = this;
  console.log('MainController loaded');


main.getRandom = function() {
  giphy.getRandom().then(function(rando){
    console.log('Response from random: ', rando);
    main.gif = [];
    main.random = rando.image_url;
    main.gif.pop();
    main.gif.push(main.random);
    });
  };

main.getGif = function() {
  giphy.getGif(main.search).then(function(results){
    console.log('Results of query: ', results);
    main.gif = [];
    main.result = results[0].images.downsized_large.url;
    main.gif.pop();
    main.gif.push(main.result);
  });
}
}
