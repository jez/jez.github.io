var gulp         = require('gulp');

var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var jade         = require('jade');
var gulpJade     = require('gulp-jade');

var sourcemaps   = require('gulp-sourcemaps');

var paths = {
  styles: {
    src:  './sass/**/*.scss',
    dest: './site/css',
  },
  jade: {
    src:  './**/*.jade',
    dest: './site',
  },
  pub: {
    src:  './public/**/*',
    dest: './site',
  },
};

function styles(devMode) {
  var result = gulp.src(paths.styles.src);

  if (devMode) {
    result = result.pipe(sourcemaps.init());
  }

  // Compile and compress sass
  result = result
    .pipe(sass({ outputStyle: 'compressed' })
    .on('error', sass.logError));

  if (devMode) {
    // Fake that the sourcemapped files came from /sass
    result = result.pipe(sourcemaps.write({ sourceRoot: '/sass' }));
  }

  return result
    // Add CSS3 prefixes after sourcemaps so we get meaningful source mappings
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.styles.dest))
    ;
}

gulp.task('styles',     function() { return styles(false); });
gulp.task('styles-dev', function() { return styles(true); });

gulp.task('jade', function() {
  return gulp.src(paths.jade.src)
    .pipe(gulpJade({jade: jade}))
    .pipe(gulp.dest(paths.jade.dest))
    ;
});

// copy files in public folder into site folder
gulp.task('public', function() {
  return gulp.src(paths.pub.src)
    .pipe(gulp.dest(paths.pub.dest))
    ;
});

gulp.task('watch', function() {
  gulp.watch(paths.styles.src, ['styles-dev']);
  gulp.watch(paths.jade.src, ['jade']);
  gulp.watch(paths.pub.src, ['public']);
});

gulp.task('clean', function(cb) {
  return del(['./site'], cb);
});

gulp.task('default', function() {
  gulp.start('jade', 'styles', 'public');
});
