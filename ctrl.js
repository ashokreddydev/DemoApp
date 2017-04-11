	(function (){


	var btn1 = document.getElementById("btnCtrl1");
	var btn2 = document.getElementById("btnCtrl2");
	var btn3 = document.getElementById("btnCtrl3");
	
	
	
	function routeProvider()
	{
		
		
		 window.location.assign("view.html")
	}
	
	btn1.addEventListener("click",routeProvider);
	btn2.addEventListener("click",routeProvider);
	btn3.addEventListener("click",routeProvider);
	



	})();