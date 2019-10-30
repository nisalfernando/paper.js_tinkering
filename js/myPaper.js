var path = new Path();

path.strokeColor = 'blue';
var start = new Point(100, 100); 

path.moveTo(start);

path.lineTo(start + [500, -200]);


var path = new Path();

path.strokeColor = 'red';
var start = new Point(100, 100); 

path.moveTo(start);

path.lineTo(start + [500, -100]);

var path = new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: 'black'
});

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}