
$( document ).ready(function(){
    let c, ctx;

     
    c = document.getElementById("gameCanvas");
    ctx = c.getContext("2d");

    ctx.strokeStyle = "#FFFFFF"
    ctx.lineWidth = 4

    ctx.moveTo(50, 20);
    ctx.lineTo(100,100);
    ctx.lineTo(50,100);
    ctx.lineTo(100,20);
    

    ctx.stroke();
});
