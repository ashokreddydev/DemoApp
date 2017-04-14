(function(){




document.getElementById("myImg1").src= localStorage.getItem("path");
document.getElementById("myImg2").src= localStorage.getItem("path");

document.getElementById("myImg3").src= localStorage.getItem("path");
document.getElementById("myImg4").src= localStorage.getItem("path");


document.getElementById("myImg5").src= localStorage.getItem("path");
document.getElementById("myImg6").src= localStorage.getItem("path");





	var btn1 = document.getElementById("backbtn");
	
	
	
	function backbutton()
	{
		

		
		  window.location.assign("index.html")
	}
	
	btn1.addEventListener("click",backbutton);






})()