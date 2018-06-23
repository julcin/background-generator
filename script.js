var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(45deg, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//Add a random button which generates two random numbers for the colour inputs.

var randomise = document.getElementById("randomise");

randomise.addEventListener("click", function() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
});

function getRandomColor() {
	var list = "0123456789ABCDEF";
	var color = "#";
	for (i=0; i < 6; i++) {
		color += list[Math.round(Math.random() * 15)];
	}
	return color;
}

//Display the initial CSS linear gradient property on page load.
setGradient();
css.textContent = body.style.background + ";";