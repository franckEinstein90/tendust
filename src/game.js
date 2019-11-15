"use strict"; 

const gameObjects = (function(){
    
    return {
       movingObject: class {
            constructor({x, y, r, a}){

            }
       } 
    }
})()

class ship extends gameObjects.movingObject{
    constructor(canvas, ctx){
        super({
                x: canvas.width/2, 
                y: canvas.height/2, 
                r: 14, 
                a: 90/100*Math.PI
                })
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
