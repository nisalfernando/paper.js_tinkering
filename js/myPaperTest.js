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



var blueCircle = new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: 'red',
	fillColor: 'blue'
});

document.querySelector('#circleOne').value = 'Nisal';

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	blackCircle.position = view.center;
}

// Squares
var blackSquare = new Path();
blackSquare.strokeColor = 'black';
blackSquare.add(new Point(30, 75));
blackSquare.add(new Point(30, 25)); 
blackSquare.add(new Point(80, 25));
blackSquare.add(new Point(80, 75));
blackSquare.closed = true;

var blackSquare2 = new Path();
blackSquare2.strokeColor = 'black';
blackSquare2.add(new Point(120, 75)); 
blackSquare2.add(new Point(120, 25)); 
blackSquare2.add(new Point(170, 25));
blackSquare2.add(new Point(170, 75));
blackSquare2.closed = true;

// var path = new Path();
// path.strokeColor = 'black';
// path.add(new Point(30, 75)); 
// path.add(new Point(30, 25)); 
// path.add(new Point(80, 25));
// path.add(new Point(80, 75));
// path.closed = true;

// // Select the path, so we can see its handles:
//path.fullySelected = true;

// Create a copy of the path and move it 100pt to the right:
// var copy = path.clone();
// copy.fullySelected = true;
// copy.position.x += 100;

// Smooth the segments of the copy:
// copy.smooth();

var rectangleOne = new Rectangle(new Point(50, 50), new Point(150, 100));
var displayRectangle = new Path.Rectangle(rectangleOne);
displayRectangle.fillColor = 'Green';
displayRectangle.selected = true;