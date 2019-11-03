// Blue line
var blueLine = new Path();

blueLine.strokeColor = 'blue';
var startBlue = new Point(100, 100); 

blueLine.moveTo(startBlue);

blueLine.lineTo(startBlue + [500, -200]);

/*// Red line
var path = new Path();

path.strokeColor = 'red';
var start = new Point(100, 100); 

path.moveTo(start);

path.lineTo(start + [500, -100]);

// Circle
var path = new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: 'black'
});

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}

// Square
var path = new Path.square({
	center:
})*/