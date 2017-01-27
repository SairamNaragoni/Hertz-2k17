 		//preloader removal
 		$(window).on('load',function (event){
		 	$(document).ready(function(event){
              		$('#preloader').slideUp(1000, function(){$(document).off('scroll');});
  			});
  		});
		$(document).ready(function(){	
			//scrolling function
			$('a[href^="#"]').click(function(e){
			 	e.preventDefault();	
				var target = this.hash;
				if(target!='#about')
				{
					var offset = $(target).offset().top;
					$('html,body').animate({
						scrollTop : offset-70
					},1500);
				}
				else
				{
					var offset = $(target).offset().top;
					$('html,body').animate({
						scrollTop : offset
					},1000);
				}	
				});
			//Fixed NavBar
			var navOffset = $('#mainNavBar').offset().top;
			$(window).scroll(function(){
				var scrollOffset = $(window).scrollTop();
				if(scrollOffset >= navOffset)
				{
					$('#mainNavBar').fadeIn(); 
					$('#mainNavBar').addClass('fixed');
					$('#about').css('padding-top','50px');
				}
				else
				{
					$('#mainNavBar').removeClass('fixed');
					$('#about').css('padding-top','0px');
				}
			});
			//active NavBar
			$(window).scroll(function(){
				var abt = $('#about').offset().top;
				var home = $('#home').offset().top;
				var events = $('#events').offset().top;
				var committee = $('#committee').offset().top;
				var contactUs = $('#contactUs').offset().top;
				var soff = $(window).scrollTop();
				if(soff>=abt && soff<events)
				{
					$('.nav li').removeClass('active');
					$('.a').addClass('active');

				}
				if(soff>=events-200 && soff<committee)
				{
					$('.nav li').removeClass('active');
					$('.b').addClass('active');
				}
				if(soff>=committee-200 && soff<contactUs)
				{
					$('.nav li').removeClass('active');
					$('.c').addClass('active');
				}
				if(soff>=contactUs-300)
				{
					$('.nav li').removeClass('active');
					$('.d').addClass('active');
				}

			});
		});
