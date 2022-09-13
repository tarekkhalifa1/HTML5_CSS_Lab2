var canvasElement = document.getElementById('canv');
var context = canvasElement.getContext("2d");

// the triangle
context.beginPath();
context.font = "30px Arial";
context.fillStyle = "#ffffff"
context.fillText("a", 60, 200);
context.fillText("b", 180, 340);
context.fillText("c", 220, 190);
context.moveTo(100, 100);
context.lineTo(100, 300);
context.lineTo(300, 300);
context.closePath();

// the outline
context.lineWidth = 10;
context.strokeStyle = '#666666';
context.stroke();

// the fill color
context.fillStyle = "#DC143C";
context.fill();