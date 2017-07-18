module.exports = function( grunt ) {
	// Load configurations.
	require('load-grunt-config')( grunt, {
		data: {
			pkg: grunt.file.readJSON( 'package.json' )
		}
	});
};
