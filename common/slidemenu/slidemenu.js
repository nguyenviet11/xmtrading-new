(function($) {

	var $body = $('body');
	var state = false;
	var scrollpos;

	var header01 = $('#header01');
	var languageBtn01 = $('.header01Language01');
  var languageDetail01 = $('.header01Language01Box01');
  var searchBtn01 = $('.header01Search01');
  var searchDetail01 = $('.header01Search01Box01');
	var calculator01 = $('.calculatorContainer01');

		$('.sideMenuBtn').on('click', function () {
			languageBtn01.removeClass('active');
      languageDetail01.slideUp(200);
      searchBtn01.removeClass('active');
      searchDetail01.slideUp(200);
			calculator01.fadeOut(100);
			$body.removeClass('headerOpen02');
		  $body.toggleClass('sideOpen');
			if(state == false) {
			  scrollpos = $(window).scrollTop();
			  $body.addClass('bodyFixed').css({'top': -scrollpos});
			  $body.addClass('sideOpen');
				header01.addClass('styleC');
			  state = true;
			} else {
			  $body.removeClass('bodyFixed').css({'top': 0});
			  window.scrollTo( 0 , scrollpos );
			  $body.removeClass('sideOpen');
				header01.removeClass('styleC');
			  state = false;
			}

		$('.side01Overlay01').on('click', function () {
			$body.removeClass('bodyFixed').css({'top': 0});
	  	window.scrollTo( 0 , scrollpos );
			$body.removeClass('sideOpen');
	  	state = false;
			languageBtn01.removeClass('active');
      languageDetail01.slideUp(200);
      searchBtn01.removeClass('active');
      searchDetail01.slideUp(200);
			calculator01.fadeOut(100);
			$body.removeClass('headerOpen02');
			header01.removeClass('styleC');
		});

	});

})(jQuery);