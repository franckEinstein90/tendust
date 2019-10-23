const game = require('./game').game


$( document ).ready(function(){
    game.onReady()
    setInterval(game.iterate, 1000/30)
     
});
