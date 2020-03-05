window.onload = draw; 
function draw() {
    
    var canv1 = document.getElementById("canvasSample");
    
    var ctx = canv1.getContext("2d"); 
    
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(230, 100);
    ctx.lineTo(70, 100);
	ctx.lineTo(70, 100);
    ctx.fillStyle = "magenta";
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(72, 60);
    ctx.lineTo(85, 72);
    ctx.lineTo(71, 94);
    ctx.lineTo(50, 70);
    ctx.lineTo(-150, 200);
    ctx.fillStyle = "lightgreen";
    ctx.fill();
   
	ctx.beginPath();
	ctx.moveTo(200, 100);
    ctx.arc(40,50,40,20,1.5*Math.PI);
    ctx.stroke();
}