module.exports = {
	options: {
		banner: '/*! <%= pkg.title %> - v<%= pkg.version %>\n' +
			' * <%= pkg.homepage %>\n' +
			' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
			' * Licensed GPLv2+' +
			' */\n'
	},
	style: {
		expand: true,
		cwd: '<%= pkg.directories.css %>',
		src: [
			'*.css',
			'!*.min.css'
		],
		dest: '<%= pkg.directories.css %>',
		ext: '.min.css'
	},
};
