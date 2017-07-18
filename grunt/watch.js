module.exports = {
		js: {
				options: {
						debounceDelay: 250
				},
				files: [
						'<%= pkg.directories.js %>'
				],
				tasks: [
						'uglify'
				]
		},
		scss: {
				options: {
						debounceDelay: 250
				},
				files: [
						'<%= pkg.directories.sass %>'
				],
				tasks: [
						'sass',
						'cssmin'
				]
		}
};
