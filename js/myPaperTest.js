// Blue line
var blueLine = new Path();

blueLine.strokeColor = 'blue';
var startBlue = new Point(100, 100); 

blueLine.moveTo(startBlue);

blueLine.lineTo(startBlue + [500, -200]);

// Red line
var redLine = new Path();

redLine.strokeColor = 'red';
var startRed = new Point(100, 100); 

redLine.moveTo(startRed);

redLine.lineTo(startRed + [500, -100]);

// Circle
var blackCircle = new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: 'black',
	fillColor: 'orange'
});

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	blackCircle.position = view.center;
}
/*
// Square
var path = new Path.square({
	center:
})*/