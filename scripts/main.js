require.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'lib/jquery-2.1.3.min'
    }
});

require(['jquery', 'lib/less', 'persist-placeholders', 'validate'], function($, less, persistPlaceholders, validate) {
	'use strict';
	// Initialize JS modules with appropriate selectors
	persistPlaceholders.init({container: $('.registration')});
	validate.init({form: $('.registration')});
});
