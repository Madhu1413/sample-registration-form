require.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'lib/jquery-2.1.3.min'
    }
});

require(['lib/less', 'contain-inputs', 'persist-placeholder', 'validate'], function() {
	// intentionally left blank
});
