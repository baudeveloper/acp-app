"use strict";

const gulp = require('gulp');
const robots = require('gulp-robots');
const humans = require('gulp-humans');
const googleWebFonts = require('gulp-google-webfonts');
const imagemin = require('gulp-imagemin');

/* Declaration for google_fonts TASK.
   Source: https://www.npmjs.com/package/gulp-google-webfonts */
const options = {
  fontsDirectory: '../fonts/',
	cssDirectory: './',
	cssFilename: 'fonts.css'
};

/* Generate robots.txt file.
   Source: https://www.npmjs.com/package/gulp-robots */
gulp.task('robots_file', () => {
  gulp.src('dist/index.html')
  .pipe(robots({
    useragent: '*',
    disallow: ['cgi-bin/']
  }))
  .pipe(gulp.dest('dist'));
});

/* Generate humans.txt file.
   Source: https://www.npmjs.com/package/gulp-humans */
gulp.task('humans_file', () => {
  gulp.src('./dist/index.html')
    .pipe(humans({
      thanks: [
        'Prasanna Kugananthan',
        'Walter Drexl',
        'Glomark Lapay',
        'Baustein Strategic Design Group Inc.'
      ],
      site: [
        'Standards: HTML5, CSS3, SVG',
        'Components: jQuery, Bootstrap, Fontawesome, Real Favicon, HTML5Shiv, Bootstrap Select, Google Fonts',
        'Software: Visual Studio Code'
      ],
      note: 'Built with love by Baustein Strategic Design Group Inc.'
    }))
    .pipe(gulp.dest('./dist/'));
});

/* Generate Google Fonts css file.
   Source: https://www.npmjs.com/package/gulp-google-webfonts */
gulp.task('google_fonts', () => {
  return gulp.src('./fonts.list')
  .pipe(googleWebFonts(options))
  .pipe(gulp.dest('dist/fonts/'));
});

/* Generate optimized images.
   Source: https://github.com/sindresorhus/gulp-imagemin */
gulp.task('images', () => {
  return gulp.src('./app/images/*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true, optimizationLevel: 2}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5})
  ]))
  .pipe(gulp.dest('dist/images/'));
});

// Default
gulp.task('default', [
  'robots_file',
  'humans_file',
  'images'
]);
