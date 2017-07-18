module.exports = {
		project: {
				options: {
						sourceMap: false,
						mangle: false
				},
				files: [{
						expand: true,
						cwd: '<%= pkg.directories.js %>',
						src: [
								'*.js',
								'!*.min.js'
						],
						dest: '<%= pkg.directories.js %>',
						ext: '.min.js',
						extDot: 'last'
				}]
		}
};
