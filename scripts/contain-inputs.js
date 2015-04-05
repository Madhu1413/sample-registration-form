define(['jquery'],function ($) {    
	$(function() {
		$('.js-contain-inputs input:not(:submit)').wrap('<span class="input-container">');
	});
});
