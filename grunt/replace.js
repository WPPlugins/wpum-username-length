module.exports = {
		readme_txt: {
				src: ['readme.txt'],
				overwrite: true,
				replacements: [{
						from: /Stable tag: (.*)/,
						to: "Stable tag: <%= pkg.version %>"
				}]
		},
		main_php: {
				src: ['<%= pkg.pot.src %>'],
				overwrite: true,
				replacements: [{
						from: /Version:\s*(.*)/,
						to: "Version: <%= pkg.version %>"
				}, {
						from: /define\(\s*'VERSION',\s*'(.*)'\s*\);/,
						to: "define( 'WPUM_UL_VERSION', '<%= pkg.version %>' );"
				}]
		}
};
