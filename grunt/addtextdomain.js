module.exports = {
	options: {
		textdomain: '<%= pkg.pot.textdomain %>',    // Project text domain.
	},
	target: {
		files: {
			src: [
					'*.php',
					'**/*.php',
					'!.sass-cache/**',
					'!assets/**',
					'!node_modules/**',
					'!tests/**'
			]
		}
	}
};
