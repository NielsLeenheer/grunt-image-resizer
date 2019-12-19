module.exports = function(grunt) {
    const eachAsync = require('each-async');
    const mkdirp = require('mkdirp');
    const path = require('path');
    const sharp = require('sharp');
    const chalk = require('chalk');


    grunt.registerMultiTask('resize', 'Resize images.', function() {
        const done = this.async();
        const options = this.options({
            src: null,
            width: 0,
            height: 0,
        });

        eachAsync(this.files, (file, index, next) => {
            const dest = file.dest;
            const src = file.src ? file.src[0] : options.src;
            const width = file.width ? file.width : options.width;
            const height = file.height ? file.height : options.height;

            mkdirp.sync(path.dirname(dest));

            sharp(src)
                .resize(width, height)
                .toFile(dest)
                .then(() => {
                    grunt.log.writeln(
                        chalk.green('✔ ') + src +
                        chalk.gray(' -> ') + dest +
                        chalk.gray(' (' + width + ' x ' + height + ')')
                    );

                    next();
                })
                .catch((error) => {
                    grunt.warn(error);
                    next(error);
                });
        }, (error) => {
            if (error) {
                grunt.warn(error);
                done(error);
            } else {
                done();
            }
        });
    });
};
