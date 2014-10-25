window.onload = function () {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var length, divergence, reduction, line_width, start_points = [];

	function setup() {
		context.fillStyle = "white";
		context.fillRect(0, 0, canvas.width, canvas.height);

	}
	setup();
}
