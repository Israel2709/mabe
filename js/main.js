$(document).ready(function(){
	main_menu();
	labels();
	calendar();

	$('html').click(function(){
		$('.loginTooltip').hide();
	});

	$('.login a').click(function(e){
		e.stopPropagation();
		var btnPosition = $(this).offset()
		var btnLeftPosition = btnPosition.left
		var btnTopPosition = btnPosition.top
		console.log($(this).offset())
		console.log("top "+btnTopPosition+ " left "+btnLeftPosition)
		$(".loginTooltip").css({
			top:btnTopPosition+20,
			left:btnLeftPosition
		})
		toggleLoginTooltip();
	});

	$(".pageButton").click(function(){
		
		var firstNum = ($(this).text() * 5) - 5;
		var lastNum = $(this).text() * 5;

		var text = '';
		if(firstNum == 0){
			text = "1 a "+ lastNum +" de 20 ordenes";
		}else{
			text = (firstNum + 1) + " a " + lastNum + " de 20 ordenes";
		}

		$('.pageText').text(text);

		$(".pageButton").removeClass("active");
		$(this).addClass("active");
		$(".table.general-table tr td:not('.page')").fadeOut(300).fadeIn(300)
	});

	$(".nextButton").click(function(){
		var indice = $(".pageButton.active").index();
		var text = '';
		var firstNum = ((indice + 1) * 5) - 5;
		var lastNum = (indice + 1) * 5;
		if(indice < 3){
			$(".pageButton.active").next().addClass("active");
			$( ".pageButton:eq("+indice+")").removeClass("active");
			$(".table.general-table tr td:not('.page')").fadeOut(300).fadeIn(300);			
			text = ((firstNum + 5) + 1) + " a " + (lastNum + 5) + " de 20 ordenes";			
			$('.pageText').text(text);
		}
	});

	
});

function toggleLoginTooltip(){
	$(".loginTooltip").toggle();
}

function labels(){
	$('.page-login .login input, .page-login .register input').focus(function(){
		$(this).prev().addClass('focus');
	});
	$('.page-login .login input, .page-login .register input').blur(function(){
		if( ($(this).val()=="")||$(this).val()=="0" ){
			$(this).prev().removeClass('focus');	
		}
	});

	$('.page-login .register select').focus(function(){
		$(this).prev().addClass('focus');
	});
	$('.page-login .register select').blur(function(){
		if( ($(this).val()=="")||$(this).val()=="0" ){
			$(this).prev().removeClass('focus');	
		}
	});

	$('.form-area input').focus(function(){
		$(this).prev().addClass('focus');
	});
	$('.form-area input').blur(function(){
		$this = $(this);
		setTimeout(function(){
			if( ($this.val()=="")||$this.val()=="0" ){
				$this.prev().removeClass('focus');	
			}
		},200);
	});
	$('.form-area select').focus(function(){
		$(this).prev().addClass('focus');
	});
	$('.form-area select').blur(function(){
		if( ($(this).val()=="")||$(this).val()=="0" ){
			$(this).prev().removeClass('focus');	
		}
	});

	$('.form-search input').focus(function(){
		$(this).prev().addClass('focus');
	});
	$('.form-search input').blur(function(){
		$this = $(this);
		setTimeout(function(){
			if( ($this.val()=="")||$this.val()=="0" ){
				$this.prev().removeClass('focus');	
			}
		},200);
	});
	$('.form-search select').focus(function(){
		$(this).prev().addClass('focus');
	});
	$('.form-search select').blur(function(){
		$this = $(this);
		setTimeout(function(){
			if( ($this.val()=="")||$this.val()=="0" ){
				$this.prev().removeClass('focus');	
			}
		},200);
	});

	$('.modal-box input').focus(function(){
		$(this).prev().addClass('focus');
	});
	$('.modal-box input').blur(function(){
		$this = $(this);
		setTimeout(function(){
			if( ($this.val()=="")||$this.val()=="0" ){
				$this.prev().removeClass('focus');	
			}
		},200);
	});
}

function main_menu(){
	$('.main-menu a').hover(function(){
		$('.main-menu a').removeClass('active');
		$(this).addClass('active');

		$( '.menu-options .option' ).hide();
		$( '.menu-options .'+$(this).attr('data-option') ).show();

		$( '.menu-options' ).css('top', $('.header').height() );
		$( '.menu-options' ).addClass('showing');
	},function(){
		$( '.menu-options' ).removeClass('showing');
		setTimeout(function(){
			if( (!$( '.menu-options' ).hasClass("showing")) ){
				$('.main-menu a').removeClass('active');
				$( '.menu-options' ).css('top','-280px');
			}	
		},500);
	});

	$('.menu-options').hover(function(){
		$( '.menu-options' ).addClass('showing');
	},function(){
		$( '.menu-options' ).removeClass('showing');
		setTimeout(function(){
			if( !$( '.menu-options' ).hasClass("showing") ){
				$('.main-menu a').removeClass('active');
				$( '.menu-options' ).css('top','-280px');
			}	
		},500);
	});
}

function show_cart(btn){
	if( $('.shopping-cart').css('display') == "block" ){
		$('.shopping-cart').fadeOut('fast');
	}else{
		pos_top = ($(btn).offset().top)+40;
		pos_left = ($(btn).offset().left)-135;
		$('.arrow').hide();
		console.log( $(window).width() );
		if( $(window).width() >= 982 ){
			$('.shopping-cart').css({
				'left': pos_left,
				'top': pos_top
			});
			$('.arrow-center').show();
		}else{
			$('.shopping-cart').css({
				'left': ($(btn).offset().left)-265,
				'top': pos_top
			});
			$('.arrow-right').show();
		}
		$('.shopping-cart').fadeIn('fast');
	}
}

function calendar(){
	$( ".calendar" ).datepicker({ 
		monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		dayNamesMin: ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"],
		minDate: 0,
		dateFormat: "d / MM / y"
	});
}

function show_modal( mod ){
	$('.overlay-blk').fadeIn('fast',function(){
		$(mod).fadeIn('fast');
	});
}
function hide_modal(){
	$('.modal-box').fadeOut('fast',function(){
		$('.overlay-blk').fadeOut();
	});
}