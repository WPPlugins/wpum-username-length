module.exports = {
		main: {
				src: [
						'**',
						'!node_modules/**',
						'!build/**',
						'!grunt/**',
						'!.git/**',
						'!Gruntfile.js',
						'!package.json',
						'!.gitignore',
						'!.gitmodules',
						'!**/Gruntfile.js',
						'!**/package.json',
						'!**/README.md',
						'!.sass-cache/**',
						'!**/*~'
				],
				dest: 'build/<%= pkg.name %>/'
		}
};
