(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"; 

class ship {
    constructor(canvas, ctx){
        this.$canvas = canvas
        this.$ctx = ctx
    }
}

ship.prototype.render = function(){
    let left = 40
    this.$ctx.strokeStyle = "#FFFFFF"
    this.$ctx.lineWidth = 4
    this.$ctx.moveTo(left, 40);
    this.$ctx.lineTo(100,100);
    this.$ctx.lineTo(left,100);
    this.$ctx.lineTo(100,20);
    this.$ctx.stroke();
}


const game = (function(){

    let $canvas, $ctx, tick, clientShip 

    return{
        onReady: function(){
            $canvas = document.getElementById("gameCanvas")
            $ctx = $canvas.getContext('2d')
            tick = 0
            clientShip = new ship($canvas, $ctx)
        }, 
        iterate: function(){
            tick += 1
            clientShip.render()
       }
    }
})()

module.exports = {
    game
}

},{}],2:[function(require,module,exports){
const game = require('./game').game


$( document ).ready(function(){
    game.onReady()
    setInterval(game.iterate, 1000/30)
     
});

},{"./game":1}]},{},[2]);
