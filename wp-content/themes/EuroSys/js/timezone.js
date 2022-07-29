

	var hrs = -(new Date().getTimezoneOffset() / 60);
	var minutes = -(new Date().getTimezoneOffset());
	minutes = minutes - 120;
	
	if(hrs >= 0)
		document.getElementById("timezone").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone+"<br>GMT+"+hrs;
	else 
		document.getElementById("timezone").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone+"<br>GMT"+hrs;

	function translateTime(t1, t2) {
		
	        t1 = parseInt(t1);
	        t2 = parseInt(t2);

	        t = t1*60 + t2;
	        t += minutes;

	        if(t<=0) t+=24*60;

	        t1 = parseInt(t/60);
	        t2 = t%60;

	        if(t1 >= 24)
                	t1 -= 24;

                if( t1 >=0 && t1 <= 9)
                    	t1 = "0"+t1;
                if( t2 >=0 && t2 <= 9)
                    	t2 = "0"+t2;

  		return t1+":"+t2;
	}	
		

		jQuery(".timezone").html(function(i, origText){
			
			origText = origText.replace("<b>", "").replace("</b>", "");

			var a = origText.split("–")[0];
			var b = origText.split("–")[1];

			var a1 = a.split(":")[0];
			var a2 = a.split(":")[1];

			var b1 = b.split(":")[0];
			var b2 = b.split(":")[1];

			return "<b>"+translateTime(a1,a2)+" – "+translateTime(b1,b2)+"</b>";
		});
//	}); 


