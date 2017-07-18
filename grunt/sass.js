module.exports = {
    options: {
        sourcemap: 'none',
        force: true,
        style: 'expanded',
        trace: true,
        lineNumbers: true
    },
    files: [{
        expand: true,
        cwd: '<%= pkg.directories.sass %>',
        src: ['<%= pkg.directories.css %>/sass/*.scss'],
        dest: '<%= pkg.directories.css %>',
        ext: '.css'
    }]
};
