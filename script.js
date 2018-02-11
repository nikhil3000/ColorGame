var count =6,ansColor;
var colors = [] ;
 var squares = document.querySelectorAll(".square");
 var quesColor = document.querySelector("#quesColor");
 var result = document.querySelector(".result");
 var h1 = document.querySelector("h1");
 var reset = document.querySelector("#reset");
 var easy =document.querySelector(".easy");
 var hard = document.querySelector(".hard");
 
 reset.addEventListener("click",function(){
 	setup(count);
 });

 easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected"); 	
 	count = 3;
 	setup(count);
 });

hard.addEventListener("click",function(){
 	easy.classList.remove("selected");
	hard.classList.add("selected"); 	
 	count = 6;
 	setup(count);
 });
setup(count);

 for (var i=0; i<6; i++) 
 	{ 		
		squares[i].addEventListener("click", function () 
		{
			console.log("clicked");
		 	if(this.style.background == ansColor)
		 	{
				colorAll(this.style.background);
				result.textContent = "Correct";
		 	}
		 	else
		 	{
		 		this.style.background = "rgb(0, 0, 0)";	 
		 		result.textContent = "Try Again";
		 	}		
		});
	} 	
 		
 	
function setup (argument) 
	{
		colors = generateRandomColours(argument);
		console.log(colors);
		ansColor = colors[Math.floor(Math.random()*argument)];	//randomly selecting ans color
	 	console.log(ansColor);
	 	quesColor.textContent = ansColor;
	 	for (var i = 0; i < argument; i++) 
	 	{	
			squares[i].style.background  = colors[i]; 
	 		squares[i].style.display = "block";
	 	} 		
	 	for (var i = argument ; i < 6; i++) {
	 		squares[i].style.display  = "none";
	 	}

	}

function colorAll (color) {
	for (var i = 0; i < colors.length; i++) {
	 	squares[i].style.background = color;
	 } 
	 h1.style.background = color;
	}

function generateRandomColours (count) {
	var colorArray = [];
	
	for (var i = 0; i < count; i++) {
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255); //rgb(0, 0, 0)
		colorArray[i] = "rgb("+r+", "+g+", "+b+")";
	}

	return colorArray;	
}