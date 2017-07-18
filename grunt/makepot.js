module.exports = {
		target: {
				options: {
						exclude: [
								'assets/.*', 'images/.*', 'node_modules/.*', 'tests/.*', 'build/.*'
						],
						domainPath: '/languages',
						mainFile: '<%= pkg.pot.src %>',
						potFilename: '<%= pkg.pot.textdomain %>.pot',
						potHeaders: {
								poedit: true, // Includes common Poedit headers.
								'x-poedit-keywordslist': true // Include a list of all possible gettext functions.
						},
						type: 'wp-plugin'
				}
		}
};
