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
	
	
	
	
	// navi Bar
	$(document).ready(function() {   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
        });