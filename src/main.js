const game = require('./game').game


$( document ).ready(function(){
    let socket = io()
    game.onReady()
    setInterval(game.iterate, 1000/30)
     
});
