// Depends on jquery.js, contain-inputs.js, and part of form.less

$(function() {
	$('.js-validate input[required]:not(:submit)').parent('.input-container').append('<span class="check-mark">YES!</span>');

	// Initialize validatable inputs with .validate class after user starts using form
	// Necessary in order to not cause :validate and :invalidate styles to trigger before user has had a chance to type in any inputs
    $('.js-validate input[required]').blur(function(event) {
		$(event.target).addClass('validate');
	});
});
