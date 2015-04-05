// Depends on jquery.js, contain-inputs.js, and part of form.less

$(function() {
	// Populate input's container with .persisted-placeholder
	$('.js-persist-placeholder input[placeholder]').each(function(i, el) {
		var text = $(el).attr('placeholder');
		$(el).parent('.input-container').prepend('<span class="persisted-placeholder">' + text + '</span>');
	});

	// Toggle .persisted-placeholder based on whether value is blank
	$('.js-persist-placeholder input[placeholder]').keyup(function(event) {
		var persistedPlaceholder = $(event.target).parent('.input-container').find('.persisted-placeholder');
		console.log(persistedPlaceholder);
		// Sure, I could use a ternary operator, but this seems more readable
		if ($(event.target).val() === '') {
			persistedPlaceholder.hide();
			$(event.target).removeClass('make-way');
		} else {
			persistedPlaceholder.show();
			$(event.target).addClass('make-way');
		}
	});
});
