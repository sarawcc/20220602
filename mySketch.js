function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	background(100);
	
	var clr1 = "#543D31" //深
	var clr2 = "#98764F" //淺
	let x1 = map(mouseX, 0, width, 0, 100)
	let x2 = map(mouseX, 0, width, 0, 20)
	let x3 = map(mouseX, 0, width, 0, 50)
	let x4 = map(mouseX, 0, width, 0, 35)
	
	fill(clr2)
	noStroke()
	rect(0, 0, width, height);

	for (var x=0;x<width;x+=100) {
	for (var y=0;y<height;y+=100) {
		fill(clr1)
		noStroke()
		ellipse(x, y, x1);
	}
	}

	for (var a=50;a<width;a+=100) {
	for (var b=50;b<height;b+=100) {
		fill('white')
		stroke(clr1)
		strokeWeight(15)
		ellipse(a, b, x2);
	}
	}

	for (var i=25;i<width;i+=50) {
	for (var j=0;j<height;j+=100) {
		fill(clr2)
		noStroke()
		ellipse(i, j, x3);
	}
	}
	
	for (var m=0;m<width;m+=100) {
	for (var n=25;n<height;n+=50) {
		fill(clr2)
		noStroke()
		ellipse(m, n, x3);
	}
	}
	
	for (var g=0;g<width;g+=100) {
	for (var h=0;h<height;h+=100) {
		fill(clr1)
		noStroke()
		ellipse(g, h, x4);
	}
	}
	}