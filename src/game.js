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
    this.$ctx.moveTo(left, 20);
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
